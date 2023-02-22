import React, { Component } from 'react'
import JSXpractice from './Components/JSXpractice'
import FunProps from './Components/FunProps'
import StateClass from './Components/StateClass'
import MapDemo from './Components/MapDemo'
import ComponentDidUpdate from './Components/ComponentDidUpdate'
class App extends Component {
  render() {
    return (
      <div>
        <JSXpractice />
        <FunProps />
        <StateClass />
        <MapDemo />
        <ComponentDidUpdate />
      </div>
    )
  }
}

export default App