import React from 'react';
import Header from './Header';
import Info from './Info';
import Steps from './Steps';
import About from './About';
import Organizations from './Organizations';
import Footer from './Footer';
import './css/main.scss';
import {HashRouter as Router} from "react-router-dom";


class App extends React.Component {
    render() {
        return (<>
            <Router basename={process.env.PUBLIC_URL}>
            <Header path='/' exact component={Header}/>
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
export default App;

