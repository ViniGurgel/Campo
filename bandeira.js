// codigo do carro

let xBandeiras = [600, 600, 600, 600, 600, 600];
let yBandeiras = [40, 96, 150, 210, 270, 318];
let velocidadeBandeiras = [2, 2.5, 3.2, 5, 3.3, 2,3]
let comprimentoBandeira = 50;
let alturaBandeira = 40;


function mostraBandeiras (){
  for (let i =0; i< imagemBandeiras.length; i++)
  {image(imagemBandeiras[i], xBandeiras[i], yBandeiras[i],comprimentoBandeira ,alturaBandeira);

  }
 
  }
  function movimentaBandeira(){
    for (let i =0; i< imagemBandeiras.length; i++){
    xBandeiras[i] -= velocidadeBandeiras[i];}
    }

function voltaPosicaoInicialBandeira(){
  for (let i=0; i< xBandeiras.length; i++){
  if (passouTodaTela(xBandeiras[i])){
    xBandeiras[i] = 600}}
}

function passouTodaTela(xBandeiras){
 return xBandeiras < -60

}