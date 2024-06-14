let canvas = window.document.getElementById("canvas");
let botao = window.document.getElementById("botao");
let container = canvas.getContext("2d");
let dal =0; 
let pts1 = 0;
let pts2 = 0;
let z;
let venceu = false;
let jogador1 = {
x:20,
y:225,
xa:15,
ya:150,
dir_playe1:0

}
let jogador2 = {
x:765,
y:225,
xa:15,
ya:150,
dir_playe2:0

}
let bolinha = {
x:800/2,
y:310,
xa:15,
ya:20,
dir:0
}
container.font="30px Arial"
let bola = container.fillRect(bolinha.x,bolinha.y,bolinha.xa, bolinha.ya);
bolinha.dir = -1
function draw(){
container.fillStyle="#8b8b8b";
container.fillStyle="blue";
container.fillText("Jogador-1: "+pts1,80,30);
container.fillRect(jogador1.x,jogador1.y,jogador1.xa, jogador1.ya);
container.fillStyle="red";
container.fillText("Jogador-2: "+pts2,800/3 +270,30);
container.fillRect(jogador2.x,jogador2.y,jogador2.xa, jogador2.ya);
container.fillStyle="#2d2d2d";
bola = container.fillRect(bolinha.x,bolinha.y,bolinha.xa, bolinha.ya);
container.fillStyle="black";
}
let dir_jogador1 = +1;
function move_player1(){
jogador1.y= jogador1.y + 1*jogador1.dir_playe1;
//console.log("Jogador1: "+jogador1.y);
}
function move_player2(){
    
    jogador2.y= jogador2.y + 1*jogador2.dir_playe2;
    console.log("Jogador2: "+jogador2.y);
    }
addEventListener("keyup",function(e){
    move_player1();
    move_player2();
console.log("parado (:");
jogador1.dir_playe1 = 0;
jogador2.dir_playe2 = 0;

if(jogador1.y >= 443){
    jogador1.y = 443;
}
if(jogador1.y <= 11){
    jogador1.y = 11;
    }

    if(jogador2.y >= 443){
        jogador2.y = 443;
    }
    if(jogador2.y <= 11){
        jogador2.y = 11;
        }
}
);
addEventListener("keydown",function(e){
if(e.keyCode === 87){
console.log("Foi para cima (:");
if(jogador1.y >= 11){
jogador1.dir_playe1 = -5;
console.log("nesse momento o valor de dir_jogador1 é: "+jogador1.dir_playe1)
}
else{
    jogador1.y = 11;
}
}
else if(e.keyCode === 83){
console.log("Foi para baixo (:");
acao =1;
if(jogador1.y <= 443){
    jogador1.dir_playe1 = +5;
}
else{
    jogador1.y = 443;
}
}
});

addEventListener("keydown",function(e){
    if(e.keyCode ===  38){
    console.log("Foi para cima (:");
    if(jogador2.y >= 11){
    jogador2.dir_playe2 = -5;
    console.log("nesse momento o valor de dir_jogador2 é: "+jogador2.dir_playe2)
    }
    
    else{
        jogador2.y = 11;
    }
    }
    else if(e.keyCode === 40){
    console.log("Foi para baixo (:");
    acao =1;
    if(jogador2.y <= 443){
        jogador2.dir_playe2 = +5;
    }
    else{
        jogador2.y = 443;
    }
    
    
    }
    });
function move_boll(){
    bolinha.x += 2*bolinha.dir;
    bolinha.y += 0.8*dal;
bola = container.fillRect(bolinha.x,bolinha.y,bolinha.xa, bolinha.ya);
/////////////////////////////Local atual do jogado1.
let inicio_player1 = jogador1.y;
let final_player1 = jogador1.y + 175;
////////////////////////////////////////////////////

let inicio_player2 = jogador2.y;
let final_player2 = jogador2.y + 175;
////////////////////////////////////////////////////
/////////////////////////////Local atual do jogado1.
let inicio_bolinha = bolinha.y +20;
let final_bolinha = bolinha.y + 15;
////////////////////////////////////////////////////
if(bolinha.x < 40){
if(inicio_bolinha > inicio_player1 && final_bolinha < final_player1 && bolinha.x > 30){
bolinha.dir = 1;
dir_bolinha();
console.log("Inicio_bolinha: "+inicio_bolinha);
console.log("fim_bolinha: "+final_bolinha);
console.log("Inicio_player1: "+inicio_player1);
console.log("fim_player1: "+final_player1);
} else{
    if(bolinha.x < -210){
    pts2 +=1;
    venceu = true;
    }
}
}  
else if(bolinha.x > 740){
    if(inicio_bolinha > inicio_player2 && final_bolinha < final_player2 && bolinha.x < 755){
        bolinha.dir = -1;
        dir_bolinha();
        console.log("Inicio_bolinha: "+inicio_bolinha);
        console.log("fim_bolinha: "+final_bolinha);
        console.log("Inicio_player1: "+inicio_player2);
        console.log("fim_player1: "+final_player2);
        }
        else{
            if(bolinha.x > 780){
            pts1 +=1;
            venceu = true;
            }
        }
}



if(bolinha.y < 0){
    dal = +1;

    }  
    else if(bolinha.y > canvas.height - 20){
        dal = -1;
  

} 



function dir_bolinha(){


        let randomNumber_1010 =  Math.random(0,1);
        let randomNumber = Math.round(randomNumber_1010);































        let min_1 = -100;
        let max_2 = 500;
        let randomNumber_2 = Math.floor(Math.random() * (max_2 - min_1 + 1)) + min_1;
        let valor_novo = randomNumber_2/100;
console.log("Valor novo: "+valor_novo);
 console.log("Valor: "+randomNumber);
 if(randomNumber == 1){
dal= +valor_novo;
console.log("////////////////////");
console.log("////////////////////");
console.log(randomNumber);
console.log("////////////////////");
console.log("////////////////////");
 } else if(randomNumber == 0){
    dal= -valor_novo;
    console.log("////////////////////");
    console.log("////////////////////");
    console.log(randomNumber);
    console.log("////////////////////");
    console.log("////////////////////");
     }
}
}

function  chan(){
    botao.style.display="none";
    draw(); 
    move_boll();
    move_player1();
    move_player2();
    }

function org(){
    botao.style.display="block";
    container.clearRect(0,0,canvas.width,canvas.height);
    jogador1.x =20;
    jogador1.y =225;
    jogador1.xa =15;
    jogador1.ya =150;
    jogador1.dir_playe1 =0;
    ///////////////
    jogador2.x =765;
    jogador2.y =225;
    jogador2.xa =15;
    jogador2.ya =150;
    jogador2.dir_playe2 =0;
    ///////////////
    bolinha.x =800/2;
    bolinha.y =310;
    bolinha.xa =15;
    bolinha.ya =20;
    bolinha.dir =-1;
    dal =-0.01;
    bola = container.fillRect(bolinha.x,bolinha.y,bolinha.xa, bolinha.ya);
    container.fillRect(jogador1.x,jogador1.y,jogador1.xa, jogador1.ya);
container.fillRect(jogador2.x,jogador2.y,jogador2.xa, jogador2.ya);
container.fillStyle="blue";
container.fillText("Jogador-1: "+pts1,80,30);
container.fillStyle="red";
container.fillText("Jogador-2: "+pts2,800/3 +270,30);
container.fillStyle="#8b8b8b";

}

function reinicia(v){
    if(z == "ok"){
        pts1 = 0;
        pts2 = 0;
        z = "not";
        venceu = false;
    }
    else{
    venceu = false;
    }  
}
setInterval(() => {
    
    if(venceu == false){
    container.clearRect(0,0,canvas.width,canvas.height);
    chan();  
    console.log("aii"); 
if(pts1 == 10 || pts2 == 10){
    botao.innerText="Zerar pontuação";
    z = "ok";
if(pts1 > pts2){
    console.log("O jogador 1 venceu!");
}else if(pts1 < pts2){
    console.log("O jogador 2 venceu!"); 
}
console.log("Alguém venceu!!!");
}




    }else{
        org();
    }
}, 1);

