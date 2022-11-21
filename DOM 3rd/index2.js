var body = document.getElementsByTagName('body')[0];

var outerDiv = document.getElementById('outerDiv');

var innerDiv = document.getElementById('innerDiv');

var button = document.getElementById('btn');

//click handler function
function clickHandler(){
    //where it was clicked
    console.log(event.currentTarget);
    event.stopPropagation();

}
button.addEventListener('click',clickHandler);
innerDiv.addEventListener('click',clickHandler);
outerDiv.addEventListener('click',clickHandler);
body.addEventListener('click',clickHandler);