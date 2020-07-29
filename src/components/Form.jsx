import React from 'react'

export class Form extends React.Component {

  render() {
    const { handleChange, inputValue } = this.props

    return (
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter model"
      />
    );
  }
}