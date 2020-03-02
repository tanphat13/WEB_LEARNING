// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this. multiplyFavoriteNumber = function(num) {
        return num * this.favoriteNumber;
    }
}

let person1 = new Person('Phat', 'Cu', 'gray', 13);
console.log(person1);

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Child = Parent.apply(this, arguments);
}

let child1 = new Child('Susan', 'Ba', 'Black', 'Bone');
console.log(child1);

/* ---------------------------------------------------------------------------------------- */

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

    this.addToFamily = function(member) {
        if (this.family.indexOf(member) === -1) {
            if (member instanceof Person) {
                this.family.push(member);
            }
        }
        return this.family.length;
    }
}
var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    console.log(person.addToFamily(anotherPerson)); // 1
    console.log(person.addToFamily(anotherPerson)); // 1
    console.log(person.family.length) ;// 1
    var anotherPerson1 = new Person();
    console.log(person.addToFamily(anotherPerson1));
    
    console.log(person.addToFamily("test")); // 1
    console.log(person.addToFamily({})); // 1
    console.log(person.addToFamily([])); // 1
    console.log(person.addToFamily(false)); // 1
    console.log(person.family.length);// 1
// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.
Array.prototype.mapClone = function(callback) {
    let newArr = [];
    for ( let i = 0; i < this.length; ++i) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}
arr = [1,2,3,5];
let newArr = arr.mapClone(
    (val) => {
        return val * 2;
    }
)
console.log(newArr);
/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
String.prototype.reverse = function() {
    let newStr = [];
    this.split('').forEach(
        (val) => { 
            newStr.unshift(val);
        }
    );
    return newStr.join('');
}

let test = "test".reverse();

console.log(test)