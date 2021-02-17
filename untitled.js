    let number = [1,2,3,4];
    number.splice(2,0,5);
    console.log(number);
     
let colour = ["green","yellow","blue"];
colour.splice(1,1,"red");
console.log(colour);



//SORTING
let numbers = [18,35,8,15,1];
let sortedNumbers = numbers.sort((a,b) =>
{
return a - b ;
});
console.log(sortedNumbers);

let numberr = [19,35,7,15,2];
let descendingN = numberr.sort((a,b) =>
    {
    return b - a ;
	});
console.log(descendingN);

//getters
let basket = {
  total: 0,
  get totalPrice() {
    return `£${basket.total.toFixed(2)}`;
  }
};
console.log(basket.totalPrice);

//setters
let user = {
	username: "",
	set setusername (value){
		this.username = value.toLowerCase();
	}
}
user.setusername = "SHALINI";
console.log(user.username);

//Date & Time
console.log(new Date())

console.log((3 % 2 ===0));
console.log(8 % 4.3)  //modulus operator
console.log(4 ** 3); //exponential operator