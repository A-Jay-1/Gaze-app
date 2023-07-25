import accountDetails from "./accountArray";
import AccountReuse from "../reuseables/accountsReuse";


const AccountsList = () => {
    return (
        <div className="accountList">
            <h1 id="listedPhotographersHeading">Listed Photographers</h1>
            <AccountReuse  accountDetails={accountDetails}/>
        </div>
    );
};

export default AccountsList;
