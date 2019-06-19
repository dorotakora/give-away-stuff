import React, {Component} from 'react';
import Header from './Header';
import Info from './Info';
import Steps from './Steps';
import About from './About';
import Organizations from './Organizations';
import Footer from './Footer';
import '../css/main.scss';
import {HashRouter as Router, Route} from "react-router-dom";

import Navigation from "./Navigation";
// import LandingPage from '../Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
// import PasswordForgetPage from '../PasswordForget';
import HomePage from './Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';


import * as ROUTES from '../constants/routes';
import {withFirebase} from "../Firebase";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        }
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({authUser}) : this.setState({authUser: null});
        })
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (<>
            <Router basename={process.env.PUBLIC_URL}>
                <Navigation authUser={this.state.authUser}/>
                <Route exact path={ROUTES.HEADER} component={Header}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                {/*<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>*/}
                <Route path={ROUTES.HOME} component={HomePage}/>
                {/*<Route path={ROUTES.ACCOUNT} component={AccountPage}/>*/}
                {/*<Route path={ROUTES.ADMIN} component={AdminPage}/>*/}
        </Router>
        <Info
        title="info"
        dark={true}
        id="info"
            />
            <Steps title="steps"
        dark={true}
        id="steps"
            />
            <About title="about"
        dark={true}
        id="about"
            />
            <Organizations title="organizations"
        dark={true}
        id="organizations"
            />
            <Footer  title="footer"
        dark={true}
        id="footer"
            />
            </>)
    }
}
export default withFirebase(App);

