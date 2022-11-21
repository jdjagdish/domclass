

//grab the form element

let form = document.getElementById("form");

//add the event listener
form.addEventListener('submit',function(){
    event.preventDefault();
    console.log("I will handle the submission")
    console.log(event);
    let username  = document.getElementById('username');
    let password  = document.getElementById('password');
    console.log(username.value);
    if(username.value == 'jagdish' && password.value== '1234')
    {
        console.log("User matched");
        this.reset();
    }
})

//check right input

//then submit