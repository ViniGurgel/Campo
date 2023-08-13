//variaveis imagens

let imagemCampo;
let imagemPalmeiras
let imagemBandeira
let imagemBandeira2
let imagemBandeiras3

//variaveis som

let somDaTrilha
let somDaColisao
let somDoPonto


//funçoes

function preload(){
imagemCampo = loadImage ("Imagens/campo.png");
imagemPalmeiras = loadImage("Imagens/palmeiras.png")
imagemBandeira = loadImage ("Imagens/bandeiracorinthians.jpg")
imagemBandeira2 = loadImage ("Imagens/bandeirasantos.jpg")
imagemBandeira3 = loadImage ("Imagens/bandeirasp.jpg")
imagemBandeiras = [imagemBandeira, imagemBandeira2, imagemBandeira3, imagemBandeira, imagemBandeira2, imagemBandeira3]


somDaTrilha = loadSound ("sons/trilha.mp3")
somDaColisao = loadSound ("sons/apitoerro.mp3");
somDoPonto = loadSound ("sons/aplausos.mp3");
somDaBola = loadSound ("sons/sombola.mp3")
}