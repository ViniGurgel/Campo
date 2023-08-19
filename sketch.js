function setup() {
    createCanvas(windowWidth, windowHeight);
    somDaTrilha.loop();
  
}


function draw() {
  background(imagemCampo);
  mostraPalmeiras();
  mostraBandeiras();
  movimentaBandeira();
  movimentaPalmeiras();
  voltaPosicaoInicialBandeira();
  verificaColisao();
  incluiPontos();
  marcaPonto ();
    

}
