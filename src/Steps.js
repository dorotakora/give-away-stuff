import React from 'react';
import  decoration from './images/decoration.jpg';
import lightbulb from './images/light-bulb.png';
import product from './images/product.png';
import skills from './images/skills.png';
import deliverytruck from './images/delivery-truck.png';

    class Steps extends React.Component {
        render() {
            return (<>
                <section className={'steps'} id={'steps'}>
                    <h2>Wystarczą 4 proste kroki</h2>
                    <img className={'decoration__img'} src={decoration} alt="decoration img"/>
                    <table className={'steps__table'}>
                        <tbody>
                        <tr>
                            <td>
                                <img className={'steps__img'} src={lightbulb} alt="light bulb"/>
                            </td>
                            <td>
                                <img className={'steps__img'} src={product} alt="package with hands"/>
                            </td>
                            <td>
                                <img className={'steps__img'} src={skills} alt="thinking head"/>
                            </td>
                            <td>
                                <img className={'steps__img'} src={deliverytruck} alt="truck"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Wybierz rzeczy</td>
                            <td>Spakuj je</td>
                            <td>Zdecyduj komu chcesz pomóc</td>
                            <td>Zamów kuriera</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ubrania, zabawki, sprzęt i inne</td>
                            <td>skorzystaj z worków na śmieci</td>
                            <td>wybierz zaufane miejsce</td>
                            <td>kurier przyjedzie <br/>w dogodnym terminie</td>
                        </tr>
                        </tbody>
                    </table>
                    <button>Załóż Konto</button>
                </section>
            </>)
        }
    }
export default Steps;