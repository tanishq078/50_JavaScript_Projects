// const USER = {
//     username: "Tanishq",
//     loginCount: 8,
//     isLoggedIn : true,
//     gerUserDetails: function(){
//         // console.log("Got user details from databases!");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(USER);
// // console.log(USER.gerUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

// here new is the constructor function which allow user to create a new instance

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }

    return this;
}

const userOne =  User("Tanishq", 8, true);
// const userTwo = new User("Mukul", 16, false);

// here new keyword give new instances to these two different user

console.log(userOne);

// console.log(userOne.constructor); //output - [Function: Object]


// console.log(userTwo);