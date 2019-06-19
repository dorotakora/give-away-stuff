import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as ROUTES from '../constants/routes.js';
import SignOutButton from './SignOut';
import Header from "./Header";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";


const Navigation = ({authUser}) => (
    <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
);

const NavigationAuth = () => {
    return (
        <ul>
            {/*<li>*/}
            {/*    <Link to={ROUTES.LANDING}>Landing</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <SignOutButton/>*/}
            {/*</li>*/}
            <li>
                <Link to={ROUTES.HOME}/>
            </li>
            {/*<li>*/}
            {/*    <Link to={ROUTES.ACCOUNT}>Account</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<Route exact path={ROUTES.HEADER} component={Header}/>*/}
            {/*</li>*/}
        </ul>
    );
};

const NavigationNonAuth = () => {
    return (
        <ul>

            <li>
                <Link to={ROUTES.HEADER}/>
            </li>
            {/*<Route path={ROUTES.SIGN_UP} component={SignUpPage}/>*/}
            {/*<Route path={ROUTES.SIGN_IN} component={SignInPage}/>*/}
        </ul>
    );
};

export default Navigation;