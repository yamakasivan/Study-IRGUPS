function onClickButton() {
    alert("Текстовая информация");
}

function mousehover(elem) {
    elem.style.fontSize = '25px';
}

let click = document.getElementById("but")
function onClickBut(but) {
    but.style.fontSize = '25px';
    but.style.height = "150px";
    but.style.width = "150px";
    but.style.color = "green";
    but.style.background = "yellow";
    but.innerHTML = "Теперь я изменился";
}
