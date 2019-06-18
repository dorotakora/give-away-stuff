import React from 'react';
import  decoration from '../images/decoration.png';

class Footer extends React.Component {

    render() {
        return (<>
                <footer className={'contact'} id={'footer'}>
                    <div>
                        <h2>Skontaktuj się z nami</h2>
                        <img className={'decoration__img'} src={decoration} alt="decoration img"/>
                        <p>Formularz kontaktowy</p>
                        <form className={'contact__form'} action="">
                            <div>
                                <label htmlFor="">
                                    <input type="text" placeholder={'Imię'}/>
                                </label>
                                <label htmlFor="">
                                    <input type="email" placeholder={'Email'}/>
                                </label>
                            </div>
                            <label htmlFor="message">
                                <textarea placeholder={'Wiadomość'} name="message" id="message" cols="10" rows="10"/>
                            </label>
                            <button>Wyślij</button>
                        </form>
                    </div>
                    <div className={'contact__copyright'}>
                        <div>Copyright 2015&copy; by Anna Dadej</div>
                        <span><a href={'https://pl-pl.facebook.com/'} target={'blank'}><i className="fab fa-facebook-f"/></a></span>
                        <span><a href={'https://www.instagram.com/'} target={'blank'}><i className="fab fa-instagram"/></a></span>
                    </div>
                </footer>
        </>)
    }
}
export default Footer;