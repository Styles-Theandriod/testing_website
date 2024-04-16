
current_price = 500

console.log(current_price)


// const let var 


var name = 'emmanuel'
name = 'ebuka chukwu micheal'
console.log(name);


let num1 = 20
let num2 = 10

console.log(num1 + num2);

const price = 300


console.log(price);

// blocked scoped in javascript 

{
    const greet = "Hello world"
    var player = 'sancheast'
}
const greet = "Hello world's greet"
console.log(greet);

console.log(player);


// Data types in javascript 

// strings 
// array 
// objects 
// boolean 
// null 
// undefined
// Number
// symbol 


let string = 'my name is emmanuel'

let myArray = ['pawpaw', 'orange', 60, ]

console.log(myArray[0]);

let product_Object = {Brand: 'iphone 14 pro max', color:'black', Price: 30000}

console.log(product_Object.Price, product_Object.Brand);

let raining = true

console.log(typeof(raining));


let empty = null 

console.log(typeof(empty));

let myProduct;

console.log(myProduct);

let x = 5
let y = 5

var product = 40


const inputValue = document.querySelector('input')
const button = document.querySelector('button')

function test(brains){
    return brains[Math.floor(Math.random() * brain.length)]
}

let brain = ['education', 'familiar', 'syntial', 'wazobia fm', 'bizmarrow']
let randomThinking = test(brain)

console.log(randomThinking);

function check(){
    if(inputValue.value === randomThinking){
        inputValue.style.border = '2px solid green'
        alert('Congratulations You won this game')
    }else{
        alert('Sorry 00 😭 you failed')
        inputValue.style.border = '2px solid red'
    }    
}


button.addEventListener('click', check)


// function 
// arrow function 
// anonymous function
// iife function

function Greet(name, message){
    console.log(message, name);
}
Greet('emmanuel', 'Hello mr')

let func = function (){
    console.log('this is a function');
}

func()


function test(){
    return(
        'we are testing a function'
    )
}

console.log(test())

function defaultParams(message, name='micheal'){
    console.log(message, name);
}

defaultParams('i am', 'emmanuel')


// let arrow = ()=>{

// }

// arrow()



// (function(){
//     console.log("welcome to javascript");
// })();


let img = document.querySelector('.img')

Person = {gender:'male', age:18, name:'shalipoli', skinColor:['fair', 'black', 'brown'], image:'./pic_bulboff.gif'}
// img.src = Person.image


console.log(Person.age, Person.name)

let myText = document.querySelector('.text')

myText.textContent = 'This is my text'

myText.style.backgroundColor = 'red'
myText.style.color = 'white'
myText.style.textAlign = 'center'

Person = {gender:'male', age:18, name:'shalipoli', skinColor:['fair', 'black', 'brown'], image:'./pic_bulboff.gif'}

// events in javascript 
let btn = document.querySelector('.btn')
let value = document.querySelector('.value')
function displayDate(){
    let date = new Date()
    value.innerHTML = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
}

// adding click on the btn 
// btn.addEventListener('click', displayDate)
btn.addEventListener('click', function(){
    let date = new Date()
    value.innerHTML = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
})














