import React from 'react';
import about from '../images/about.jpg';
import signature from '../images/signature.png';
import  decoration from '../images/decoration.png';


class About extends React.Component {
    render() {
        return (<section className={'about'} id={'about'}>
            <div>
                <h2>O nas</h2>
                <img className={'decoration__img'} src={decoration} alt="decoration"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque nesciunt optio porro tempora? Animi assumenda expedita laudantium numquam, praesentium sequi sit. Distinctio, quasi, soluta?</p>
                <img src={signature} alt="signature"/>
            </div>
                <img src={about} alt="people"/>
            </section>
        )
    }
}


export default About;