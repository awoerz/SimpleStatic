import React from 'react';

function Button(props) {
  const handleClick = (e) => {
    e.preventDefault();
    alert('I really hope this works');
  }
  return (
    <>
      <label>{props.label}</label>
      <button onClick={handleClick}>{props.placeholder ? props.placeholder : 'button'}</button>
    </>
  )
}

export default Button;