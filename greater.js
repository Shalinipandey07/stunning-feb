function myFunc(){
	var myvar=10;
	if(myvar==10) {
		let myvar=20;
		console.log("myvar",myvar);
		console.log("myvar",myvar);
	}
	console.log("myvar",myvar);
	}
	myFunc();


	//FUNCTION WITHOUT RETURNING
	function combineString(x,y)
    {
	return `${x}  ${y}`;
	console.log("x","y",x,y);
    }
    combineString("hello","world");
