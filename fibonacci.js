// program to execute fibonacco series

const number = parseInt(prompt('Enter the number of terms: ')); // input to be given by user 
let n1 = 0 , n2 = 1 , nextterm ;

console.log('Fibonacci series:');

for ( let i = 1; i <= number; i++)
{
	console.log(n1);
	nextterm = n1 + n2;
	n1 = n2;
	n2 = nextterm;
}