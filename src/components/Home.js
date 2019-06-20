import React, {Component} from 'react';

import  decoration from '../images/decoration.jpg';
import { Link as LinkTo, animateScroll as scroll } from "react-scroll";
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../constants/routes';
import SignOutButton from "./SignOut";
import SignInPage, {SignInForm} from "./SignIn";
import { withFirebase } from '../Firebase';


const HomePage = () => (
    <div>
        <HomeForm/>
    </div>
)


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            headerShow: false,
            isChecked: false,
            value: ''
        };
    }


        scrollToTop = () => {
            scroll.scrollToTop();
        };
        scrollToBottom = () => {
            scroll.scrollToBottom();
        };

        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }

        handleScroll = () => {
            if(window.scrollY > 0) {
                this.setState({
                    headerShow: true
                })
            }else {
                this.setState({
                    headerShow: false
                })
            }
        };

    handleCheckboxChange = (e) => {
        this.setState({
            isChecked: e.target.checked,
            [e.target.name]: e.target.value
        });
    }


    render() {

            return <div>
                <div className={'header_signin'}>
                    <div className={'header__right'}>
                        <ul className={'header__log'}
                            id={this.state.headerShow ? 'scrollNav' : ''}>
                        </ul>
                        <nav className={'header__menu'}
                             id={this.state.headerShow ? 'scrollNav' : ''}>
                            <i className="fas fa-angle-double-up" onClick={this.scrollToTop}/>
                            <ul className ="nav-items">
                                <li className="nav-item">
                                    <LinkTo
                                        activeClass="active"
                                        to="info"
                                        spy={true}
                                        smooth={true}
                                        offset={-120}
                                        duration= {500}>Start</LinkTo></li>
                                <li className="nav-item">
                                    <LinkTo
                                        activeClass="active"
                                        to="steps"
                                        spy={true}
                                        smooth={true}
                                        offset={-130}
                                        duration= {500}>O co chodzi?</LinkTo></li>
                                <li className="nav-item"><LinkTo
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration= {500}>O nas</LinkTo></li>
                                <li className="nav-item"><LinkTo
                                    activeClass="active"
                                    to="organizations"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration= {500}>Fundacje i organizacje</LinkTo></li>
                                <li style={{
                                    border: '1px solid black',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: "right",
                                    fontSize: '16px',
                                }}>
                                    <p>Profil</p>
                                    <p>Ustawienia</p>
                                    <p>Moje zbiórki</p>
                                    <SignOutButton/>
                                </li>
                            </ul>
                            <i className="fas fa-angle-double-down" onClick={this.scrollToBottom}/>
                        </nav>
                    </div>
                    <div className='header__info'>
                        <p>Oddaj rzeczy, których nie chcesz</p>
                        <p>POTRZEBUJĄCYM</p>
                        <img className={'decoration__img'} src={decoration} alt={'decoration'}/>
                        <p>Wystarczą 4 proste kroki:</p>
                        <div className={"header_steps"}>
                            <div className={"header_steps-square"}>
                                <div>
                                    <p>1</p><p>Wybierz</p><p>rzeczy</p>
                                </div>
                            </div>
                            <div className={"header_steps-square"}>
                                <div>
                                    <p>2</p><p>Spakuj je</p><p>w worki</p>
                                </div>
                            </div>
                            <div className={"header_steps-square"}>
                                <div>
                                    <p>3</p><p> Wybierz</p><p> fundację</p>
                                </div>
                            </div>
                            <div className={"header_steps-square"}>
                                <div>
                                    <p>4</p><p> Zamów</p><p> kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"header__warning"}>
                    <h3>Ważne!</h3>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy widzieć komu najlepiej je przekazać.</p>
                </div>
                <form className={'header__form'}>
                    <p>Krok 1/4</p>
                    <h3>Zaznacz co chcesz oddać:</h3>
                    <label className="container">
                            <input type="checkbox" name={'optiona'} onClick={this.handleCheckboxChange}
                                   value={this.state.value}/>
                        <span className="checkmark"/>
                        ubrania, które nadają sie do ponownego użycia
                    </label>
                    <label className="container">
                        <input type="checkbox" name={'optionb'} onClick={this.handleCheckboxChange} value={this.state.value}/>
                        <span className="checkmark"/>
                        ubrania, do wyrzucenia
                    </label>
                    <label className="container">
                        <input type="checkbox" name={'optionc'} onClick={this.handleCheckboxChange} value={this.state.value}/>
                        <span className="checkmark"/>
                        zabawki
                    </label>
                    <label className="container">
                        <input type="checkbox" name={'optiond'} onClick={this.handleCheckboxChange} value={this.state.value}/>
                        <span className="checkmark"/>
                        książki
                    </label>
                    <label className="container">
                        <input type="checkbox" name={'optione'} onClick={this.handleCheckboxChange} value={this.state.value}/>
                        <span className="checkmark"/>
                        inne
                    </label>
                    <button type={"button"}>Dalej</button>
                </form>
                <div className={"header__img"}/>
            </div>
        }
    }

const HomeForm = compose(
    withRouter,
    withFirebase,
)(Home);

export default HomePage;

export { HomeForm };