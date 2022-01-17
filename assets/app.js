let input = document.querySelector('#input');
let button = document.querySelector('.button');
let target = document.querySelector('.target');
let dataType = typeof (input.value);

input.addEventListener('keydown', () => {
    button.style.cssText = "background-color:#10bbff;";
    target.innerHTML = input.value;


})
button.addEventListener('click',()=>{
    alert(`Hi there! You've just entered \"${input.value}\",which is a simple ${dataType}!`);
    input.value.remove();
    location.reload();
})

