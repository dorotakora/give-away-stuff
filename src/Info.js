import React from 'react';


    class Info extends React.Component {
        render() {
            return (<section className={'info'} id={'info'}>
                    <div className={'info-steps'}>
                        <p>10</p>
                        <p>oddanych wokrów</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quasi.</p>
                    </div>
                    <div className={'info-steps'}>
                        <p>5</p>
                        <p>wspartych organizacji</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed.</p>
                    </div>
                    <div className={'info-steps'}>
                        <p>7</p>
                        <p>Zorganizowanych zbiórek</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nulla?</p>
                    </div>
            </section>
           )
        }
    }
    

export default Info;