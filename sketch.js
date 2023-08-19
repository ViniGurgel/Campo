function setup() {
    createCanvas(windowWidth, windowHeight);
      
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
