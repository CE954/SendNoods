import "./index.scss";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import accountCartoon from '../../assets/noodleGuy2.jpg'
import noodles from '../../assets/smoky-noods.jpg';

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
        <>
        <div className="account-container">
            <h1>Hello {sessionUser.name}!</h1>
            <div id='account-buttons'>
                <button onClick={logout}>LOGOUT</button>
            </div>
        <img id='account-cartoon' src={accountCartoon} alt='noodle guy'/>
        <img id='account-noodles' src={noodles} alt='noodles' />
        </div>
        </>
    )
};

export default AccountPage;