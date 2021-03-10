text = document.querySelector('.text');
btn1 = document.querySelector('.totalChange')
btn2 = document.querySelector('.uniqueChange')
reset = document.querySelector('.resetAll')
regExToAllTxt = /'/g
regExToSpecTxt = /(\s'|'\s)/g
example = text.innerHTML;
btn1.addEventListener('click', (event) => {
    text.innerHTML = example.replace(regExToAllTxt, '"')
    console.log(event)
});
btn2.addEventListener('click', (event) => {
    text.innerHTML = example.replace(regExToSpecTxt, '"')
    console.log(event)
})
reset.addEventListener('click', (event) => {
    text.innerHTML = example
    console.log(event)
})
