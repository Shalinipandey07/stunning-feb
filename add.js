var add = (a,b) =>
{
	console.log(a+b);
}
add(7,21);
add(4,6);
add(10,9);


function sayHello()
{
	console.log ("Hello, my name is Shalini");
}
sayHello();


var sayHello = () =>  // ASSIGNING FUNCTION TO A VARIABLE
{
	console.log ("hiiiiiii");
}
sayHello();

(function () // WITHOUT CALLING THE FUNCTION
{
	console.log ("how are you");
}
) ();

(() => {
	console.log (" I am fine ");
}
) ();