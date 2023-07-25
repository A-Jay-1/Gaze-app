import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import accountDetails from "./accountArray";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";

const PhotograhyPage = () => {
    const [accountInfo, setAccountInfo] = useState({
        upvotes: 0,
        comments: [],
    });
    const { accountId } = useParams();

    //dependency array not present after function, keep in mind
    useEffect(() => {
        const loadAccountInfo = async () => {
            const response = await axios.get(`/api/accountsList/${accountId}`);
            const newAccountInfo = response.data;
            setAccountInfo(newAccountInfo);
        };
        loadAccountInfo();
    }, );

    const account = accountDetails.find((account) => account.id === accountId);

    //upvode button on frontend
    const addUpvote = async () => {
        const response = await axios.put(
            `/api/accountsList/${accountId}/upvote`
        );
        const updatedAccount = response.data;
        setAccountInfo(updatedAccount);
    };

    return (
        <>
            <h1>{account.name}</h1>
            <div className="upvotes-section">
                <button onClick={addUpvote}>Upvote</button>
                <p>This account has {accountInfo.upvotes} upvote(s)</p>
            </div>
            <h1>{account.camera}</h1>
            <h1>{account.niche}</h1>
            <AddCommentForm
                accountName={ accountId }
                onAccountUpdated={updatedAccount => setAccountInfo(updatedAccount)} />
            <CommentsList comments={accountInfo.comments} />
        </>
    );
};

export default PhotograhyPage;
