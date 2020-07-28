//variaveis
var x=30; 
var y=350; 
var xd = 0;
var yd = 0;
var chances = 10;
var tempo=0;
var prova = 'único';
var raio1 = 25;
var raio2 = 25;
var xq = [];
var yq = [], obj=10,obj1 = 10;
var estadoDisparo = false
var venceu = 'Venceu!';
var tela =1;
var xu = 80;
var xa = 100;
let bg;
let c;
let camara;
let cortico;
let aboli;
var anima;
var soldado;
var mundo;
var inimigo;
var tiro;
var eu;
var carol;
var barreira=1000;
var barreira2=0;
//animações
anima = soldado;
anima2 = inimigo;
anima3= tiro;
//carregamento de imagens
function setup() { 
  carol = loadImage('caroli.jpg')
  eu = loadImage('eu.jpg')
  aboli = loadImage('aboli.jpg')
  cortico = loadImage('cortico.jpg')
  tiro = loadImage('livros.jpg')
  inimigo= loadImage('bandeira.png')
  mundo = loadImage('mundo.png')
  soldado = loadImage('soldado.png')
  bg = loadImage('capa.png');
  camara =loadImage('camara.jpg')
  createCanvas(500, 460); //vetor para aletoriedade dos obj
   for(var i=0; i<obj; i++){
  xq[i]=random(30,400)
  yq[i]= random(30,140)
  }
}
 
  //tela 1
function draw() {
  if(tela==1){
    background(bg);
    rect(xu, xa, 170, 45)
    textSize(30);
    text('     Corrida pela igualdade', 60, 50);
    textSize(25);
    text('Jogar', 90, 130);
    textSize(10);
    text('(aperte ENTER)', 160, 130);
    textSize(25);
    text('Intruções', 90, 230);
    textSize(10);
    text('(aperte DELETE)', 160, 240);
    textSize(25);
    text('Créditos', 300, 230);
    textSize(10);
    text('(aperte ALT)', 300, 240);
  }
    if(keyIsDown(UP_ARROW)) {
      xa=100;
    }
    if(keyIsDown(DOWN_ARROW)){
       xa=200;
    }
  if(keyIsDown(RIGHT_ARROW)){
       xu=250;
    }
  if(keyIsDown(LEFT_ARROW)){
       xu=80;
    }
    if(keyIsDown(DELETE)) {
    tela=2;
    }
   if(keyIsDown(ALT)) {
    tela=3;
    }
   if(keyIsDown(ENTER)) {
    tela=4;
    }
  if(keyIsDown(SHIFT)){
    tela=1;
  }
 if(chances>barreira){
    tela==5
    }
    
  //tela 2
  if(tela==2){
    c = color('204, 153, 0');
    background(aboli);
    textSize(20);
    fill(c);
    text('No jogo, você será um jovem guerreiro que irá lutar'+'\n'+'contra o país em que vive. Será necessário atirar no'+'\n'+'oponente apertando CTRL, se você for atingido pelo'+'\n'+'país, seus pontos de vida irão diminuir. Ganha se'+'\n'+'acertar 1000 pontos.', 10, 70);
    text('A função deste jogo é Identificar os mecanismos de'+'\n'+'inserção dos negros na sociedade brasileira pós-aboli_'+'\n'+'ção e avaliar os seus resultados. Porém somente em'+'\n'+'1989(100 anos após abolição) a Lei 7.716 determinou'+'\n'+'o racismo como crime no Brasil. E somente em 2010 a'+'\n'+'Lei 12.288 foi aprovada, dando aos negros direitos'+'\n'+'iguais aos brancos. Diante disso, vemos que só atual_'+'\n'+'mente o governo vem tomando medidas para incluir os'+'\n'+'negros na sociedade', 10, 200)
    textSize(15);
    text('play Shift para voltar a tela inicial',10,430);
  }//tela 3
  if(tela==3){
    c = color('204, 153, 0');
    background(cortico);
    image(eu, 50, 60)
    image(carol,50,250)
    textSize(14);
    fill(c);
    text('Programadora: Bianca Santos de Albuquerque.'+'\n'+'Bacharelanda em C&T na UFRN.', 50, 220);
    text('Prof. colaboradora: Carolina Elnatana Ramos dos Santos.'+'\n'+'Bacharelanda de História na UNP.', 50, 340);
    text('play SHIFT para voltar a tela inicial',10,400)
  }//tela 4/jogo
  if(tela ==4){
  background(mundo); //fundo
    anima=soldado;//personagem
    image(anima,x,y);
    fill(255, 204, 0);
    tempo++;//cont do tempo
    textSize(18);//textos na parte superior
    text('Pontos: '+chances, 10, 30);
    text('Tempo: '+(Math.floor(tempo/60)), 200, 30);
    if(chances<1){//condição p tela 5
      tela =5;
    }
    
// movimentação do personagem  
if (keyIsDown(LEFT_ARROW)) { x = x-5; }

if (keyIsDown(RIGHT_ARROW)) { x = x+5; }

//limites de tela para o personagem reaparecer
  if(x>400){
    x = 0;
  }
  if(x<0){
    x= 400;
  }
  if(y>400){
    y = 0;
  }
  if(y<0){
    y= 400;
  }//comando para disparar
  if(keyIsDown(CONTROL)) {
      yd=y
      xd=x
    estadoDisparo = true;
  }//animação do disparo
  if(estadoDisparo){
    anima3=tiro;
    image(anima3, xd, yd)
    yd =yd -10;
  }
  
for(i=0;i<obj;i++){ //aleatoriedade da animação para inimigo
fill('#fae');
   anima2=inimigo;
    image(anima2,xq[i], yq[i], 50, 50);
if(dist(x, y, xq[i], yq[i]) < raio1 + raio2){
    x=0; 
    y=350;
     xq[i] = random(30,400)
    yq[i] = random(30,140)
   chances=chances-10;

  
}
  }//colisaõ livro com bandeira
  for(i=0;i<obj; i++){
    yq[i] = yq[i] +3
    if(dist(xd, yd, xq[i], yq[i]) < raio1 + raio2){
   xq[i] = random(0, 300)
   yq[i] = random(0, -100) 
      chances=chances+10;
}
     if(yq[i]  >400 ){
        yq[i] = random(0, -100) 
       xq[i] = random(0, 300)
}
}  
    if(chances>barreira){//fim de jogo
    c = color('204, 153, 0');
    background(camara);
    textSize(30);
    fill(c);
    text('Parabéns!', 50, 150);
    textSize(20);
    text('Você ganhou esse jogo!', 40,250)
    }
    if(chances==barreira2){//fim de jogo
    c = color('204, 153, 0');
    background(camara);
    textSize(30);
    fill(c);
    text('AHHHH!', 50, 150);
    textSize(20);
    text('Infelizmente você perdeu!', 40,250)
    }
}

}