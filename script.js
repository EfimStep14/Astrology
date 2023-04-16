let leftArrow = document.getElementsByClassName('leftArrow')[0];
let rightArrow = document.getElementsByClassName('rightArrow')[0];
let slider = document.getElementsByClassName('slider')[0];
let position = 0;
let form1Img = document.getElementsByClassName('form1Img')[0];
let form1Info = document.getElementsByClassName('form1Info')[0];

form1Info.style.width = window.innerWidth - (form1Img.width / 2);
console.log();
rightArrow.onclick = function(){
    position = position + 100;
    position = position == 300? 0: position;
    slider.style.transform='translateX(-'+position+'%)';
    console.log(position);

    
}
leftArrow.onclick = function(){
    position = position == 0? 300: position;
    position = position - 100;
    console.log(123);
    slider.style.transform = 'translateX(-'+position+'%)'
}