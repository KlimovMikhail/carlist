import React from 'react';

export const Button = ({handleClick, text}) => {
  return <button className="button" onClick={handleClick}> {text} </button>
}