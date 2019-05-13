import  React from 'react';

class Pagination extends React.Component {

        state = {
            currentPage: 1,
            namesPerPage: 3
        };

    handleClick = (e, i) => {
            this.setState({
                currentPage: i
            })
    };

    render() {
        const {names} = this.props;
        const  {currentPage, namesPerPage} = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentNames = names.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((item, i) => {
            return <>
                    <tr key={item.name}>
                        <th>{item.name}</th>
                        <th/>
                    </tr>
                    <tr key={i}>
                        <td><i>Cel i misja: {item.mission}</i></td>
                        <td>{item.collectionOfThings}</td>
                    </tr>
            </>
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(names.length/namesPerPage); i++) {
            const element = <li key={i + names[i].name}
                                onClick={ e => this.handleClick(e,i)}
                                className={this.state.currentPage === i ? 'active' : ''}>
                            {i}</li>;
            pageNumbers.push(element);
        }
        return (<>
            <table className={'organizations__item'}>
                <tbody>
                    {elements}
                </tbody>
            </table>
                <ul className={'organizations_numbers'}>
                    {pageNumbers}
                </ul>
        </>);
    }
}
export default Pagination;