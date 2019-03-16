// import './util.js'
// import substract, {square, add} from './util.js';

// console.log("app.js is running");

// console.log(square(2));

// console.log(add(2, 3));

// console.log(substract(100,45));

// import isSenior, {isAdult, canDrink} from './person.js'

// console.log("Adult: " + isAdult(18));
// console.log("Can drink: " + canDrink(21));
// console.log("Is senior citizen: " + isSenior(65));

// import validator from 'validator';

// console.log(validator.isEmail("test@gmm"));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));