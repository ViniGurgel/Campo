function setup() {
  createCanvas(500, 400);
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