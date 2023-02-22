import React, { Component } from 'react'

class JSXpractice extends Component {
    constructor(props) {

        // Calling super class constructor
        super(props);

        // Creating state
        this.state = {
            data: 'My name is User',
            date: new Date(),

        }
        this.state = { favocolor: "red" };
        this.state = { show: true };
        // Binding event handler
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        console.log(this.props);
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favocolor: "yellow" })
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favocolor;
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (

            <div>
                <h1>(1)constructor Calling</h1>
                <input type="text" value={this.state.data} />
                <button onClick={this.handleEvent}>Please Click</button>
                <h1>Hello, world!</h1>
                {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <h1>My Favorite Color is {this.state.favocolor}</h1>
                <div id="mydiv"></div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    }

}
class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}
export default JSXpractice