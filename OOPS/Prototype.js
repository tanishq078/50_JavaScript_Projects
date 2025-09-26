// let myName = "Tanishq    ";

// console.log(myName.trueLength);
// our challenge is to create a method which is written above

let myHero = ['IronMan', 'Spiderman'];

let heroPower = {
    IronMan: 'Armor',
    Spiderman: 'Web',

    getSpiderManPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

// heroPower.getSpiderManPower();

Object.prototype.Tanishq = function(){
    console.log("Tanishq is present in all objects!");
}

// heroPower.Tanishq();

// myHero.Tanishq();

// both myHero(array) and heroPower(object) both have access to Tanishq()

Array.prototype.HeyTanishq = function(){
    console.log("Hey From Tanishq!");
}

// myHero.HeyTanishq();
// heroPower.HeyTanishq() //--> Error

// Inheritance

const User = {
    name: "Chai",
    email: "chai@mail.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

// Mordern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


// Challenge Solution

let anotherUsername = "ChaiAurCode";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Tanishq   ".trueLength();
"HELLO WORLD   ".trueLength();