let andMore = document.getElementById("andMore");
setInterval(anim, 3000);

const colors = ['orangered','#BB3B0E','#DD7631','#708160','#D8C593','#474747'];
let i = 0;

function anim(){
    andMore.style.setProperty('background-color', colors[i]);
    i++;
    i >= colors.length ? i = 0 : "";
}