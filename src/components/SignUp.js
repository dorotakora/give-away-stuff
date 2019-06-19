import React from 'react';
import {Link, withRouter} from "react-router-dom";
import decoration from '../images/decoration.png';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

const SignUpPage = () => {
    return (
        <div>
            <SignUpForm/>
        </div>
    );
};

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends React.Component{

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }


    onSubmit = event => {
        const {email, passwordOne} =this.state;

        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.HEADER);
            })
            .catch(error => {
                this.setState({error})
            })
        event.preventDefault();
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        const {email, passwordOne, passwordTwo, error,} = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';

        return (   <form onSubmit={this.onSubmit} id={'register'}>
            <h2>Załóż konto</h2>
            <img src={decoration} alt="decoration" className={'decoration__img'} />
            <label htmlFor="email">
                <input type="email"
                       placeholder={'Email'}
                       name="email"
                       value={email}
                       onChange={this.onChange}/>
            </label>
            <label htmlFor="password">
                <input type="password"
                       placeholder={'Hasło'}
                       name={"passwordOne"}
                       value={passwordOne}
                       onChange={this.onChange}/>
            </label>
            <label htmlFor="password">
                <input type="password"
                       placeholder={'Powtórz hasło'}
                       name={"passwordTwo"}
                       value={passwordTwo}
                       onChange={this.onChange}/>
            </label>
            <p>Przypomnij hasło</p>
            <div>
                <button type={"submit"} disabled={isInvalid} >Załóż konto</button>
                <button><Link to={ROUTES.SIGN_IN}>Zaloguj się</Link></button>
                {error && <p>{error.message}</p>}
            </div>
            <div className={'log__links'}><Link to={ROUTES.HEADER}>Powrót do strony głównej</Link></div>
        </form>)
    }
}


const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export {SignUpForm};