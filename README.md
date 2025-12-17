#### 1) What is the difference between var, let, and const?


# let is not again declarable, but we can update the value.
# const is fixed.Not declarable and not updatable the value.
# var works at function where declaration doesnt appeard outside the function. But in the case of Loop/If block,declaration appeard outside also.


#### 2) What is the difference between map(), forEach(), and filter()? 


# forEach() is used for creating function for each element of an Array.And it returns nothing.
# map() repalaces Array's privious valo and create new value over the old value.It returns new Array.
# filter() finds Array's value according to the condition and make a new array with those new find values. 


#### 3) What are arrow functions in ES6?


# Arrow function is the modern, easy to read and look, time saver version of Java Script Function.Regular old style JS function...
function Hello (name) {
  return "hello-" + name;}
# modern ES6 version function called arrow function.its a great looking shorcut of old one. Such as,
hello (name) => {
  `hello-${name}`
};


#### 4) How does destructuring assignment work in ES6?


# When we bring value from an object or array and keept the value in a new variable. We called it destructuring assignment work in ES6.


#### 5) Explain template literals in ES6. How are they different from string concatenation?


# As we saw in old js methood we used to use + sign for adding multiple variable & string.It called string concatenation.
# On the other hand template literals is the modern version old string concatenation.`${}`
by using that dynamic tamplate , we can put differen valo and get them. No need to + sign or Complex looking code