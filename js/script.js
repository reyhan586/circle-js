const circle = document.querySelector(".circle");
circle.addEventListener('click' , func);

function func (){
    let x , y;
    if (screen.width < 470){
         x = (Math.random() * 450);
         y = (Math.random() * 500);
    }
    else {
             x = (Math.random() * 1100);
             y = (Math.random() * 500);
    }
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.backgroundColor=  getRandomLightColor();
}

function getRandomLightColor() {
    let r = 50 + Math.round(250 * Math.random());
    let g = 20 + Math.round(250 * Math.random());
    let b = 35 + Math.round(250 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}

