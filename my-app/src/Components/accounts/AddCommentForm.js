import { useState } from "react";
import { axiosPrivate } from "../../axiosCustom";

const AddCommentForm = ({ accountName, onAccountUpdated }) => {
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        try {
            const response = await axiosPrivate.post(
                `/api/accountsList/${accountName}/comments`,
                {
                    text: commentText,
                }
            );
            const updatedAccount = response.data;
            onAccountUpdated(updatedAccount);
            setCommentText("");
        } catch (error) {
            setCommentText("");
            console.error(error);
            alert(error.response.data);
        }
    };

    return (
        <div id="comment-form">
            <h3>Add a comment</h3>
            <label>
                Comment:
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows="4"
                    cols="50"
                />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;
