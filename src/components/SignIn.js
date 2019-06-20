import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import decoration from '../images/decoration.png';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
import {PasswordForgetLink} from "./PasswordForget";

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};


class SignInFormBase extends Component{
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return <form id={'login'} onSubmit={this.onSubmit}>
            <h2>Zaloguj się</h2>
            <img src={decoration} alt="decoration" className={'decoration__img'}/>
            <label htmlFor="email">
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email "
                />
            </label>
            <label htmlFor="password">
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Hasło"
                />
            </label>
           <PasswordForgetLink/>
            <div>
                <button><Link to={ROUTES.SIGN_UP}>Załóż konto</Link></button>
                <button disabled={isInvalid} type="submit">Zaloguj się</button>
                {error && <p>{error.message}</p>}
            </div>
            <div className={'log__links'}><Link to={ROUTES.HEADER}>Powrót do strony głównej</Link></div>
        </form>
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
