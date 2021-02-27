function whosPaying(names) {
    let noOfPeople = names.length;
    console.log(noOfPeople)
    var randomPos = Math.floor(Math.random() * noOfPeople);
    console.log(randomPos)
    let randomPerson = names[randomPos];
    return randomPerson + " is going to buy lunch today!"
}

whosPaying(["X", "Y", "A", "B", "C"])