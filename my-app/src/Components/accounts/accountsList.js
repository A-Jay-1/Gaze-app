import AccountReuse from "../reuseables/accountsReuse";
import { useOutletContext } from "react-router-dom";

const AccountsList = () => {
    const { accountDetails } = useOutletContext();
    return (
        <div className="accountList">
            <h1 id="listedPhotographersHeading">Listed Photographers</h1>
            <AccountReuse accountDetails={accountDetails} />
        </div>
    );
};

export default AccountsList;
