import { Link } from "react-router-dom";
const AccountReuse = ({ accountDetails }) => {
    return (
        <>
            {accountDetails.map((account) => (
                <Link
                    className="individualAccounts"
                    key={account.uid}
                    to={`/accountsList/${account.uid}`}
                >
                    <ul>
                        <li>{account.name}</li>
                    </ul>
                </Link>
            ))}
        </>
    );
};

export default AccountReuse;
