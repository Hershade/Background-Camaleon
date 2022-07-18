function changeBackgroundColor(){
    return "#" + Math.random().toString(16).slice(2,8);  
}
console.log(changeBackgroundColor());

function setBackground(){
    let bgColor = changeBackgroundColor();
    document.body.style.background = bgColor;
    var n_match  = ntc.name(bgColor);
    document.getElementById("nameColor").innerText = n_match[1]
}
setBackground();
