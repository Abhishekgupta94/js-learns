//objects grops and use multiple values together..
const product = {
    name: 'Abhishek',
    age: 21
};
// console.log(product);
// console.log(product.age);
// console.log(product.name);
// product.name="Abhi";  //change the value of name from Abhishek to Abhi
// console.log(product);

product.newProperty = 'New';//Add a new property:value pair in object
// console.log(product);

delete product.newProperty;
// console.log(product);

// console.log(typeof product);
// console.log(typeof product.name);

/*const Data = {
    name: 'Raj',
    age: 25,
    ['delivery-time']:'1 Day'//we also add property using Bracket Notation
};

console.log(Data);
console.log(Data.name);//Dot Notation
console.log(Data['name']);//Bracket Notation useful when don't work with dor notation 
                          //like console.log(Data.first-name); -->give error
console.log(Data["age"]);//always use single or double quote to give property of obj.
console.log(Data['delivery-time']);*/


//we  also include another object inside the object called Nested Object
//Also put function into the object which is called a Method
const product2={
    name:'Fan',
    price:1300,
    rating:{
        stars:4.5,
        count:87
    },
    fun: function funtion1(){
        console.log("I'm a function or Method inside an object");
        return "I'm Done"
    }
}
// console.log(product2);
// console.log(product2.price);
// console.log(product2.rating.stars);
// product2.fun();

//JSON-->JavaScript Object Notation (Build in js objects with less features)
console.log(JSON.stringify(product2));//convert product2 from js object to json 
// console.log(typeof JSON.stringify(product2));//its type is string
// console.log(product2);//JSON cannot support function inside object

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));//Convert JSON string to JS object... 
console.log(typeof JSON.parse(jsonString));

//Another Build in object---> localStorage
//using local storage we get the value that we saved earlier even we refresh the page...--> Help in Rock-Paper-Scissor
// Store only string so js object can be convert into string by JSON.stringify();

