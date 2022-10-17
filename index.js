// Write a function and use 'call' to call the function

// var obj = {num:2};

// function addTothis(a){

//  return this.num + a;

// }

// console.log(addTothis.call(obj,3)); //output- 5

// Write a program using apply

// var obj = {num:2};

// function addTothis(a,b,c){

//  return this.num + a + b + c;

// }

//console.log(addTothis.call(obj,1,2,3));

// var arr = [1,2,3];

// console.log(addTothis.apply(obj,arr)); //output- 8

// Write a program using bind

// var obj = {num:2};

// function addTothis(a,b,c){

//  return this.num + a + b + c;

// }

// console.log(addTothis.call(obj,3));

// var arr = [1,2,3];

// var bound = addTothis.bind(obj);

// console.dir(bound);

// console.log(bound(1,2,3)); //output- 8

// Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

// var student = {age:20};

// function addTothis(){

//  return this.age ;

// }

// var bound = addTothis.bind(student);

// console.log(bound()); //Output- 20



// by using bind
// let multiply = function(x,y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(5);

//by creating closure
let multiply = function(x){
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);    //output is 10

let multiplyByThree = multiply(3);
multiplyByThree(5);    //output is 15