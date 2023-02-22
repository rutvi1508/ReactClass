import React, { Component } from 'react'

class MapDemo extends Component {

    render() {
        const array1 = [1, 2, 3, 4, 5];
        const map1 = array1.map(item => item * 2 + " ")
        const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];
        const listItems = myList.map((myList) => {
            return <li>{myList}</li>;
        });
        const numbers = [1, 2, 3, 4, 5];
        const listItems1 = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        return (
            <div>
                <h1>(4)List,Map and Key</h1>
                <h2>{map1}</h2>
                <ul> {listItems} </ul>
                <ul> {listItems1} </ul>

            </div>
        )
    }
}

export default MapDemo