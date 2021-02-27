var output = [];
x = 1;
function fizzbuzz() {

  if (x%3 === 0 && x%5 === 0){
    output.push("FizzBuzz");
  } else if (x%5 === 0) {
    output.push("Buzz");
  } else if (x%3 === 0) {
    output.push("Fizz");
  } else {
    output.push(x);
  }
  x++;
console.log(output);
}


for (var i = 1; i < 20; i++) {
  fizzbuzz();
}