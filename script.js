function enviar(){
    var peso = document.getElementById("peso").value;
    var tempo = document.getElementById("tempo").value;
    var velocidade = document.getElementById("velocidade").value;
    var gastoCalorico = peso * velocidade * (tempo/60);
    let formatacao = document.getElementById("resultado");
    formatacao.style.color = "white";
    formatacao.style.fontSize = "20px";
    formatacao.style.fontWeight = "700";
    document.querySelector(".resultado").innerHTML = "Você gastou " + gastoCalorico +  " calorias";

}