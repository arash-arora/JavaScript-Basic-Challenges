var bottles = 99;
while (bottles >= 1 ) {
  if (bottles > 1) {
    alert(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " + (bottles-1) + " bottles of beer on the wall.");
  } else {
    alert(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " + "no more bottles of beer on the wall.");
  }
  
  bottles--; 
}
alert("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")