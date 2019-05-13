import React from 'react';
import {Link} from "react-router-dom";
import decoration from './images/decoration.png';

class Login extends React.Component{

    render() {
        return <div id={'login'}>
            <h2>Zaloguj się</h2>
            <img src={decoration} alt="decoration" className={'decoration__img'}/>
            <label htmlFor="email">
                <input type="email" placeholder={'Email'}/>
            </label>
            <label htmlFor="password">
                <input type="password" placeholder={'Hasło'}/>
            </label>

            <p>Przypomnij hasło</p>
            <div>
                <button>Załóż konto</button>
                <button>Zaloguj się</button>
            </div>
            <div className={'log__links'}><Link to={"/"}>Powrót do strony głównej</Link></div>
        </div>
    }
}
export default Login;