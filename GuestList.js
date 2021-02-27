var guestList = ["Angela", "Jack", "Arash", "Tej", "Vj", "NA", "HS"];
var name = prompt("What's your name ");
if(guestList.includes(name)){
  console.log("Welcome!");
}
else{
  console.log("Sorry, may be next time ")
}