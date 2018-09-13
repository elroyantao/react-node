import React, { Component } from 'react'

import './Loader.css'

export default class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="lds-hourglass"></div>
      </div>
    )
  }
}