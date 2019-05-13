import React from 'react';
import Pagination from './Pagination';
import  decoration from './images/decoration.jpg';

class Organizations extends React.Component {

    organizationsNames = [
        {
            name: 'Organizacja samorządowa "Nieś pomoc"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji mieszkaniowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Organizacja Osób Niepełnosprawnych "Wózek"',
            mission: 'Pomoc niepełnosprawnym dzieciom z ubogich rodzin',
            collectionOfThings: 'ubrania, meble, zabawki'},
        {
            name: 'Organizacja katolicka "Ojciec"',
            mission: 'Pomoc dla osób niesłyszących',
            collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
        {
            name: 'Organizacja samorządowa "Nieś pomoc"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji mieszkaniowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Organizacja Osób Niepełnosprawnych "Wózek"',
            mission: 'Pomoc niepełnosprawnym dzieciom z ubogich rodzin',
            collectionOfThings: 'ubrania, meble, zabawki'}

    ];

    foundationsNames = [
        {
            name: 'Fundacja "Dbam o Zdrowie"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Fundacja "Dla dzieci"',
            mission: 'Pomoc dzieciom z ubogich rodzin',
            collectionOfThings: 'ubrania, meble, zabawki'},
        {
            name: 'Fundacja "Bez domu"',
            mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
            collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
        {
            name: 'Fundacja "Dbam o Zdrowie"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Fundacja "Dla dzieci"',
            mission: 'Pomoc dzieciom z ubogich rodzin',
            collectionOfThings: 'ubrania, meble, zabawki'},
        {
            name: 'Fundacja "Bez domu"',
            mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
            collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
        {
            name: 'Fundacja "Dbam o Zdrowie"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'}
    ];

    localOrgNames = [
        {
            name: 'Lokalna Inicjatywa "Sąsiad Ursynowa"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Pomoc Samotnym Matkom "Mamusia"',
            mission: 'Pomoc samotnym matkom',
            collectionOfThings: 'ubrania, meble, zabawki'},
        {
            name: 'Lokalsi inicjatywa Miasta Warszawa',
            mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
            collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
        {
            name: 'Lokalna Inicjatywa "Sąsiad Ursynowa"',
            mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
            collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
        {
            name: 'Pomoc Samotnym Matkom "Mamusia"',
            mission: 'Pomoc samotnym matkom',
            collectionOfThings: 'ubrania, meble, zabawki'},
        {
            name: 'Lokalsi inicjatywa Miasta Warszawa',
            mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
            collectionOfThings: 'ubrania, jedzenie, ciepłe koce'}
    ];

    state = {
        names: [
            {
                name: 'Fundacja "Dbam o Zdrowie"',
                mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
                collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
            {
                name: 'Fundacja "Dla dzieci"',
                mission: 'Pomoc dzieciom z ubogich rodzin',
                collectionOfThings: 'ubrania, meble, zabawki'},
            {
                name: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
                collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
            {
                name: 'Fundacja "Dbam o Zdrowie"',
                mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
                collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'},
            {
                name: 'Fundacja "Dla dzieci"',
                mission: 'Pomoc dzieciom z ubogich rodzin',
                collectionOfThings: 'ubrania, meble, zabawki'},
            {
                name: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
                collectionOfThings: 'ubrania, jedzenie, ciepłe koce'},
            {
                name: 'Fundacja "Dbam o Zdrowie"',
                mission: 'Pomoc osobom znajdującym sie w trudnej sytuacji życiowej',
                collectionOfThings: 'ubrania, jedzenie, spręt AGD, meble, zabawki'}
        ]
    };

    handleChooseOrganizations = () => {
        this.setState({
            names: this.organizationsNames,
        })
    };

    handleChooseFoundations = () => {
        this.setState({
            names: this.foundationsNames,
        })
    };

    handleChooseLocalOrg = () => {
        this.setState({
            names: this.localOrgNames,
        })
    };

    render() {
        return (<section className={'organizations'} id={'organizations'}>
                <div className={'organizations__header'}>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt="decoration"/>
                    <div className={'organizations__links'}>
                        <div>
                            <button onClick={this.handleChooseFoundations}>Fundacjom</button>
                            <button onClick={this.handleChooseOrganizations}>Organizacjom pozarządowym</button>
                            <button onClick={this.handleChooseLocalOrg}>Lokalnym zbiórkom</button>
                        </div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>
                </div>
                    <Pagination names={this.state.names}/>
            </section>
        )
    }
}


export default Organizations;


