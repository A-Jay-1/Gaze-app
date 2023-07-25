import { useState } from "react";
import axios from "axios";

const AddCommentForm = ({ accountName, onAccountUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await axios.post(`/api/accountsList/${accountName}/comments` ,{
            postedBy: name,
            text: commentText,
        });
        const updatedAccount  = response.data;
        onAccountUpdated(updatedAccount);
        setName('');
        setCommentText('');

    }

    return(
        <div id="comment-form">
            <h3>Add a comment</h3>
            <label>
                Name:
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                     type="text" />
            </label>
            <label>
                Comment:
                <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    rows="4" cols="50"/>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;