import React from 'react';
import CarsElement from './CarsElement';

export class CarsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.cars.map((elem) =>  <CarsElement key={elem.id} elem={elem} /> )}
      </ul>
    )
  }
}
