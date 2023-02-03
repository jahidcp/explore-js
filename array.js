const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const friendAge = [25, 28, 19, 29, 2568];
const studentId = {
    name:"Jahidul",
    id: 28541,
    age: 26,
    Occupation : "Blockchain Consultant",
    liveCountry: "Bangladesh"
}

// Find of every data type
console.log(typeof country);
console.log(typeof age);
console.log(isIndependent);
console.log(typeof friendAge);

//Find of array data type

console.log(Array.isArray(friendAge));


// find of data store in array

console.log(friendAge.includes(27));
console.log(friendAge.includes(28));
console.log(friendAge.indexOf(28));
console.log(friendAge.indexOf(2568));

// added array data concatenation

const newFriendAge = [21, 18, 22, 23, 24];
const allFriend = newFriendAge.concat(friendAge);
console.log(allFriend);