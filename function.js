function greet() // defining the function
{
	console.log ("HELLO")  // function body
}
greet();//calling the function 




function add(x,y) // defining the function 
{
	return x+y;  // function body
}

//taking the value from the user 
let number1 = prompt("enter the first number");
let number2 = prompt("enter the second number");

var result = add(number1,number2); // calling the function
console.log("The sum is " + result); // displaying the function


function sayHello()
{
	console.log ("Hello, my name is Shalini");
}
sayHello();