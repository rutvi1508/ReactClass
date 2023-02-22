import React, { Component } from 'react'

class FunProps extends Component {

    shoot = (e) => {
           alert(e); 
    }

    render() {
        return (
            <div>
            <h1>(2)</h1>
                <button onClick={() => this.shoot("Goal!")}>Take the shot!</button>
            </div>
        )
    }
}

export default FunProps