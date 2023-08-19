// codigos do Palmeiras
let xPalmeiras = 87
let yPalmeiras = 409
let colisao = false
let meusPontos = 0

  function mostraPalmeiras(){
     image(imagemPalmeiras, xPalmeiras, yPalmeiras, 30, 30);
    
    
  }

 function movimentaPalmeiras(){
    if (keyIsDown(UP_ARROW))
      yPalmeiras -=1 
   
    if (keyIsDown(DOWN_ARROW))
      if (podeSeMover()){
      yPalmeiras += 1}}

function verificaColisao(){
    for (let i = 0; i< imagemBandeiras.length; i++ ){
      colisao = collideRectCircle (xBandeiras [i], yBandeiras [i], comprimentoBandeira, alturaBandeira, xPalmeiras, yPalmeiras, 10)
      if (colisao){
        voltaPalmeirasParaPosicaoInicial();
         if (meusPontos >0)
        meusPontos -=1;
        somDaColisao.play();
      }      
    }
  }    
  function voltaPalmeirasParaPosicaoInicial (){
    yPalmeiras = 409
  }
  function incluiPontos() {
    textAlign (CENTER);
    textSize(25);
    fill (248,248,255);
    text(meusPontos, width / 5, 22);
  }
    
    function marcaPonto (){
      if (yPalmeiras < 6) {
        meusPontos += 1;
        somDoPonto.play();
        voltaPalmeirasParaPosicaoInicial ();
      }
 }

function podeSeMover(){
  return yPalmeiras < 370;
}
     
