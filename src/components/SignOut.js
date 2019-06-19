import React from 'react';
import * as ROUTES from '../constants/routes';
import { withRouter, Link } from 'react-router-dom';
import {withFirebase} from "../Firebase";

const SignOutButton = ({firebase}) =>
     (
        <button type={"button"}
                onClick={firebase.doSignOut}
                style={{
                    backgroundColor: "transparent",
                    border: 'none',
                    fontSize: '16px',
                    textAlign: 'right',
        }}>
        <Link to={ROUTES.HEADER} style={{fontSize: '16px',}}>Wyloguj</Link>
        </button>
    );

export default withFirebase(SignOutButton);