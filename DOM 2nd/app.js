function changeTheme() {

    console.log(event.type);
    let head = document.getElementsByTagName('head')[0];

// select the current link css tag
let linkTag =  document.getElementById('css');

// remove the css link tag
head.removeChild(linkTag);
//create  a new link tag 
let newLinkTag = document.createElement('link');
newLinkTag.setAttribute('id','cssnew');
newLinkTag.setAttribute('rel','stylesheet');


// add the new href 
newLinkTag.setAttribute('href','darktheme.css');

//append it to the head
head.appendChild(newLinkTag);
}

//select the button

let button = document.getElementById('btn');
console.log(button);

// add the event listener

button.addEventListener('click',changeTheme);