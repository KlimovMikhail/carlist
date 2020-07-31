import React from 'react';

import { Button } from './components/Button';
import { CarsList } from './components/CarsList';
import { cars } from './Utils';
import { Form } from './components/Form';

import { v4 as uuidv4 } from 'uuid';
import "./assets/style.scss"


export class App extends React.Component {

  state = {
    cars: cars,
    inputValue: "",
    filteredCars: []
  }

  buttonHandleAdd = () => {
    const { cars } = this.state
    this.setState({
      filteredCars: [],
      cars: [
        ...cars,
        {
          id: uuidv4(),
          model: 'Ford',
          color: 'blue',
        }
      ]
    })
  };

  buttonHandleDelete = () => {
    const { cars } = this.state
    this.setState({
      cars: cars.slice(1, cars.length),
      filteredCars: []
    }
    )
  };

  buttonHandleFilter = () => {
    this.setState((prevState) => {
      return {
        filteredCars: prevState.cars.filter((elem) => elem.color === 'blue')
      }
    })
  };

  buttonHandleReset = () => {
    const { cars } = this.state
    this.setState({ cars: cars, filteredCars: [] })
  }

  handleChangeInput = (e) => {
    const { cars } = this.state
    const { value } = e.target
    this.setState({ inputValue: value })
    this.setState({
      filteredCars: cars.filter((item) => item.model.toLowerCase().includes(value.toLowerCase()))
    })
  }

  render() {
    const { inputValue, cars, filteredCars } = this.state
    return (
      <div className="container">
        <Form handleChange={this.handleChangeInput} inputValue={inputValue} />
        {
          filteredCars.length ? <CarsList cars={filteredCars} /> : <CarsList cars={cars} />
        }
        <div>
          <Button handleClick={this.buttonHandleAdd} text='Add' />
          <Button handleClick={this.buttonHandleDelete} text='Delete' />
          <Button handleClick={this.buttonHandleFilter} text='Filter' />
          <Button handleClick={this.buttonHandleReset} text='Reset' />
        </div>

      </div>
    );
  }
}
