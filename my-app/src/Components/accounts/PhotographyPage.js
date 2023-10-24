import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosPrivate } from "../../axiosCustom";
import { useOutletContext } from "react-router-dom";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";
import useUser from "../../hooks/useUser";

const PhotograhyPage = () => {
    const { accountDetails } = useOutletContext();

    const [accountInfo, setAccountInfo] = useState({
        upvotes: 0,
        comments: [],
    });
    const { accountId } = useParams();

    const { user, isLoading } = useUser();
    // console.log(user);

    const account = accountDetails.find((account) => account.uid === accountId);
    //dependency array not present after function, keep in mind
    useEffect(() => {
        setAccountInfo(account);
    }, []);

    //upvode button on frontend
    const addUpvote = async () => {
        try {
            const response = await axiosPrivate.put(
                `/api/accountsList/${accountId}/upvote`
            );
            const updatedAccount = response.data;
            setAccountInfo(updatedAccount);
        } catch (error) {
            console.error(error);
            alert(error.response.data);
        }
    };

    return (
        <>
            <h1>{account?.name}</h1>
            <div className="upvotes-section">
                {user ? (
                    <button onClick={addUpvote}>Upvote</button>
                ) : (
                    <button>Log in to upvote</button>
                )}
                <p>
                    This account has {accountInfo?.upvotes?.length || 0}{" "}
                    upvote(s)
                </p>
            </div>
            <h1>{account?.camera}</h1>
            <h1>{account?.niche}</h1>
            {user ? (
                <AddCommentForm
                    accountName={accountId}
                    onAccountUpdated={(updatedAccount) =>
                        setAccountInfo(updatedAccount)
                    }
                />
            ) : (
                <button>Log in to comment</button>
            )}

            <CommentsList comments={accountInfo?.comments || []} />
        </>
    );
};

export default PhotograhyPage;
