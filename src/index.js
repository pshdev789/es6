// var -> function
// let -> block
// const -> allows only to read
function sayHello(){
const x=10;
for(let i=0; i<5; i++){
  var m=9;
  console.log(i);
}
  // cannot reassign const
  // x=9;
  console.log("Value of var "+m);
  console.log("Value of const "+x);


}

sayHello();

 // Object

 const person = {
  name:'Kanchi',
  //walk,talk are a method since it
  // is a function inside a object
  walk: function() {},
  talk(){}
 };

//  Accessing Objects
person.talk();
person['name'] = 'Kanchika';

// If know the property name ahead
// can use . notation
person.name;

// If the name of the field is 
// unknown use is like this with sqare bracets
const targetMember = 'name';
person[targetMember] = 'Kkk';


// Arrow functions
// Old js
const square = function(number){
  return number*number;
}

/**  Arrow fuction.
 *If needed single parameter no need
 * to use (), const square = number=>{}.
 * no parameters use double braces, const square = ()=>{}
 * If a one single line in the body ommit 
 * 
 * **/
const square = number=>{
  return number*number;
}
//  If a one single line in the body ommit {} and return keyword
// number goes to number times number
const square1 = number=> number*number;