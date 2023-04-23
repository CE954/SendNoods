import "./index.scss";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AccountPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) return (
        <Redirect to="/" />
    );

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <div className="account-container">
            <h1>Hello {sessionUser.name}!</h1>
            <div id='account-buttons'>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
};

export default AccountPage;