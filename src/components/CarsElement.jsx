import React, { Component } from 'react'

export default class CarsElement extends Component {
  render() {
    return (
      <li > {`model: ${this.props.elem.model} color: ${this.props.elem.color}`} </li>
    )
  }
}
