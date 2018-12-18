// Object
let person = {
    name: "Ayush",
    age: 20,
    city: "Jaipur"
};

/* Retrieving Data */
/* --------------- */
// Bracket notation     /* BETTER */
console.log("Name of person (Using Bracket Notation):");
console.log(person["name"]);
// Dot notation
console.log("Name of person (Using Dot Notation):");
console.log(person.name);

/* Updating Data */
/* ------------- */
person["age"] += 1;
console.log("Age of person after updation:");
console.log(person["age"]);

/* Creating Objects */
/* ---------------- */
// Make an empty object and then add to it
let person2 = {};
person2["name"] = "Boruto";
person2.age = 18;
console.log(person2);
console.log(person2.name);
console.log(person2.age);

// All at once
let person3 = {
    name: "Ayush",
    age: 20,
    city: "Jaipur"
};

// Another way of initializing an Object
let person4 = new Object();
person4["name"] = "Goku";
person4["anime"] = "Dragon Ball";
console.log(person4);
console.log(person4["name"]);
console.log(person4["anime"]);