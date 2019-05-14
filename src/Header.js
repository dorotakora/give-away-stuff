import React from 'react';
import Login from './Login';
import Register from './Register';
import  decoration from './images/decoration.jpg';
import { Link as LinkTo, animateScroll as scroll } from "react-scroll";
import {Link, Route} from "react-router-dom";

  class Header extends React.Component{
      state = {
        isActive: false,
        headerShow: false
      };

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

      render() {

          return <>
              <div className={'header'}>
                  <div className={'header__right'}>
                      <ul className={'header__log'}
                          id={this.state.headerShow ? 'scrollNav' : ''}>
                          <li><Link to={"/login"}>Zaloguj</Link></li>
                          <li><Link to={"/register"}>Załóż konto</Link></li>
                      </ul>
                      <Route path="/login" component={Login}/>
                      <Route path="/register" component={Register}/>
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
                              <li className="nav-item"><LinkTo
                                  activeClass="active"
                                  to="footer"
                                  spy={true}
                                  smooth={true}
                                  offset={-100}
                                  duration= {500}>Kontakt</LinkTo></li>
                          </ul>
                          <i className="fas fa-angle-double-down" onClick={this.scrollToBottom}/>
                      </nav>
                  </div>


                      <div className={'header__info'}>
                          <p>Zacznij pomagać!</p>
                          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                          <img className={'decoration__img'} src={decoration} alt={'decoration'}/>
                          <div className={'header__info-buttons'}>
                              <button>Oddaj rzeczy</button>
                              <button>Zorganizuj zbiórkę</button>
                          </div>
                      </div>

              </div>
          </>
      }


  };

  export default Header;