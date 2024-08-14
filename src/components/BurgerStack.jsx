import React from 'react';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
        </li>
      ))}
    </ul>
  );
};
export default BurgerStack;