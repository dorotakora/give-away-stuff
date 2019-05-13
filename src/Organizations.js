import React from 'react';
import Pagination from './Pagination';
import  decoration from './images/decoration.jpg';

class Organizations extends React.Component {
    render() {
        return (<section className={'organizations'} id={'organizations'}>
                <div className={'organizations__header'}>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt="decoration"/>
                    <div className={'organizations__links'}>
                        <div>
                            <button>Fundacjom</button>
                            <button>Organizacjom pozarządowym</button>
                            <button>Lokalnym zbiórkom</button>
                        </div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>
                </div>
                    <Pagination/>
            </section>
        )
    }
}


export default Organizations;


