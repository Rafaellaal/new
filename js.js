let realce = document.querySelectorAll('td.nomee');
    realce.forEach(td => {
    td.style.setProperty("color", "rgb(73, 43, 243)", "important"); 
    console.log(td); 
});


const pontos = document.querySelectorAll('#pontos');
console.log(pontos);

const vitorias = document.querySelectorAll('#vitoria');  
const empates = document.querySelectorAll('#empate');



pontos.forEach((pontoElemento, indice) => {
    const numeroDeVitorias = parseInt(vitorias[indice].textContent);
    const numeroDeEmpates = parseInt(empates[indice].textContent);

    const totalDePontos = (numeroDeVitorias * 3) + (numeroDeEmpates * 1) ;

    pontoElemento.textContent = totalDePontos;
});

//quarta

function addGol(time) {
    let placar = document.getElementById(time);
    placar.textContent = parseInt(placar.textContent) + 1;
}

//audio
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("vai");
    audio.volume = 0.2; // Define o volume para 20%
});