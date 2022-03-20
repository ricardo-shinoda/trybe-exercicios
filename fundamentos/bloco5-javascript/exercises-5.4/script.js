window.onload = function (){
    let select = document.querySelector("select");
    select.addEventListener("change", function() {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = select.value;
    localStorage.setItem('5.4-Background-color', selected.value);
    })

    let select2 = document.querySelector("#font");
    font.addEventListener("change", function() {
    let selected2 = select2.selectedOptions[0];
    document.body.style.color = select2.value;
    localStorage.setItem('5.4-fontColor', selected2.value)
    })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function(){
    let p = document.querySelector("p");
    p.style.fontSize = `${inputFontSize.value}px`;
    localStorage.setItem('5.4-fontSize', `${inputFontSize.value}px`);
    })

    let savedBackground = localStorage.getItem('5.4-Background-color');
    document.body.style.backgroundColor = savedBackground;

    let savedFontColor = localStorage.getItem('5.4-fontColor');
    document.body.style.color = savedFontColor;

    let savedFontSize = localStorage.getItem('5.4-fontSize');
    let p = document.querySelector("p");
    p.style.fontSize = savedFontSize;
}
