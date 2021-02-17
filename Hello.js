function combination(...strings)
{
	console.log("Hello","world","!!!!!!");
}
combination();

//default function 
function createD(x = 'default' , y = shalini , z = pandey){
	console.log("kl");
}
createD("default" , "shalini" , "pandey");


function increment(count = 0)
{
console.log(count);
count++;
if (count===1){
	increment(count)
}
}
increment();