function setUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    this.email = email;
    this.password = password;

    setUsername.call(this, username);
}

const CHAI = new createUser("Chai", "chai@fb.com", "123");

console.log(CHAI);