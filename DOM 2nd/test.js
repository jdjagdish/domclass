
//select the buttons

let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');

yesBtn.addEventListener('click',submit);
noBtn.addEventListener('click',submit);
noBtn.addEventListener('mouseover',function(){
    noBtn.innerHTML = 'Yes';
    yesBtn.innerHTML = 'No';
})

noBtn.addEventListener('mouseout',function(){
    noBtn.innerHTML = 'No';
    yesBtn.innerHTML = 'Yes';
})

function submit() {
    window.alert("Congratulations you got a Date with me !!!")
}