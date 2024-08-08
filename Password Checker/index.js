const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');

inputfield.addEventListener('input', function () {
    let password = inputfield.value;
    if (password.length < 8) {
        outputfield.innerHTML = 'Password is too short!';
        outputfield.style.color = 'red';
    }
    else if(password.search(/[A-Z]/) == -1){
        outputfield.innerHTML = 'Password is missing a Uppercase Letter!';
        outputfield.style.color = 'red';
    }
    else if(password.search(/[a-z]/) == -1){
        outputfield.innerHTML = 'Password is missing a Lowercase Letter!';
        outputfield.style.color = 'red';
    }
    else if(password.search(/[0-9]/) == -1){
        outputfield.innerHTML = 'Password is missing a Numeric Character!';
        outputfield.style.color = 'red';
    }
    else if(password.search(/[!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/) == -1){
        outputfield.innerHTML = 'Password is missing a Special Character!';
        outputfield.style.color = 'red';
    }
    else {
        outputfield.innerHTML = 'Your password is strong!'; 
        outputfield.style.color = 'green';
    }
});
