function fibb(n) {
  output = [];
  var a = 0;
  var b = 1;
  if(n===1){
    output.push(a);
  }
  else if(n==2) {
    output.push(a);
    output.push(b);
  }
  else{
    output.push(a);
    output.push(b);
    for (var i = 1; i <= n-2; i++) {
      var c = a + b;    
      output.push(c);
      a = b;
      b = c;
    }
  }
  alert(output);
}
fibb(5);