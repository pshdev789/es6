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