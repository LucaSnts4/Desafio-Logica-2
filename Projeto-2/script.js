const calculoRank= contagemRank (342, 256);

function contagemRank(vitorias, derrotas){
  return vitorias - derrotas
}

const tituloRank= ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

switch (true){
  case calculoRank < 10:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[0])
	break;
  case calculoRank < 20:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[1])
	break;
  case calculoRank < 50:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[2])
	break;
  case calculoRank < 80:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[3])
	break;
  case calculoRank < 90:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[4])
	break;
  case calculoRank < 100:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[5])
	break;
  case calculoRank > 101:
	console.log( "O Herói tem saldo restante de " + calculoRank + " e está no nível " + tituloRank[6])
	break;
}

/*segunda opção de resolução usando Function e If, else if, else.
let calculoRank = contagemRank (236, 154)
let rankDoHeroi = ""

function contagemRank(vitorias, derrotas){
  return vitorias - derrotas
}

if(calculoRank <= 10){
	rankDoHeroi = "Ferro"
} else if(calculoRank <= 20){
	rankDoHeroi= "Bronze"
} else if(calculoRank <= 50){
	rankDoHeroi= "Prata"
} else if(calculoRank <= 80){
	rankDoHeroi= "Ouro"
} else if(calculoRank <= 90){
	rankDoHeroi= "Diamante"
} else if(calculoRank <= 100){
	rankDoHeroi= "Lendário"
} else if(calculoRank >= 101){
	rankDoHeroi= "Imortal"
}

console.log("O Herói tem saldo restante de " + calculoRank + " e está no nível " + rankDoHeroi)
*/
