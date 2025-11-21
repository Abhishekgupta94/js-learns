//function are like values we can store it in a variable
/*const fun = function greeting(){//even we don't need greeting to write
    console.log("Hii! Good Morning");
};
fun();

function display(num){
    console.log(num);
}
display(5);
 

//we can also passes fun into object 
const object1={
    num:4,
    fun(){
        console.log("say hello");
    }
}
object1.fun();


//setTimeout is a Asynchonous code i.e. it doesn't wait for complete execution
//run function in feature take 2 values 1-A func that we want to run ion feature
 //2-time after whichh func run 1000=1sec 

setTimeout(function(){
    console.log('timeout');
     },3000);                      
*/
//Synchronous Code--> which run line by line then going to next line

// setInterval(function(){
//     console.log('run func after every 3 sec')
// },3000);

//loop through the array by using function .forEach()...
const arr=[1,2,3,4]
arr.forEach((value, index)=>{//take value as well as index
    if(index===3)return;//only skip curr iteration 
    console.log(index,value);
});

/* for(let i=0;i<arr.length;i++){
    const val=arr[i];
    if(val===3)return;// stops the whole <script> execution
    console.log(i,val);
}*/

/* //Arrow Function
const arrowFunc1 = () =>{
    console.log('heloo!');
};
arrowFunc1();

const arrowFunc2 = () =>{
    console.log('heloo!');
};
arrowFunc2();

const oneLine = ()=> 2+3;
console.log(oneLine());

const object={
 func:()=>{
    //statements
 },
 func(){
    //statements
 }
};
*/

console.log([1,-3,6].filter((value)=>{
    // if(value>=0)return true;
    // else return false;

    return (value>=0);
}));

console.log([1,2,3].map((value)=>{
    return value*2;
}));