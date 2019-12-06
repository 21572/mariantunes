
$.getJSON("viagem.json", function(json){

class soma {
	constructor(local,viagem){
		this.loc = local;
		this.viag = viagem;
	}

	get valor(){
		return this.loc + this.viag;
	}
};
//PRAIA E TRANSPORTES
let somaPC= new soma(json.ferias[0].valor, json.transporte[0].valor);
let somaPA= new soma(json.ferias[0].valor, json.transporte[1].valor);
let somaPV= new soma(json.ferias[0].valor, json.transporte[2].valor);

//ILHA E TRANSPORTES

let somaIC= new soma(json.ferias[1].valor, json.transporte[0].valor);
let somaIA= new soma(json.ferias[1].valor, json.transporte[1].valor);
let somaIV= new soma(json.ferias[1].valor, json.transporte[2].valor);

//CAMPO E TRANSPORTES

let somaCC= new soma(json.ferias[2].valor, json.transporte[0].valor);
let somaCA= new soma(json.ferias[2].valor, json.transporte[1].valor);
let somaCV= new soma(json.ferias[2].valor, json.transporte[2].valor);



document.getElementById("PA").innerHTML=somaPA.valor;
document.getElementById("PC").innerHTML=somaPC.valor;
document.getElementById("PV").innerHTML=somaPV.valor;

document.getElementById("IA").innerHTML=somaIA.valor;
document.getElementById("IC").innerHTML=somaIC.valor;
document.getElementById("IV").innerHTML=somaIV.valor;

document.getElementById("CA").innerHTML=somaCA.valor;
document.getElementById("CC").innerHTML=somaCC.valor;
document.getElementById("CV").innerHTML=somaCV.valor;


//console.log("PRAIA")
/*
	console.log("PRAIA");
	console.log(somaPC.valor);
	console.log(somaPA.valor);
	console.log(somaPV.valor);
	console.log("ILHA");
	console.log(somaIC.valor);
	console.log(somaIA.valor);
	console.log(somaIV.valor);
	console.log("CAMPO");
	console.log(somaCC.valor);
	console.log(somaCA.valor);
	console.log(somaCV.valor);
*/



});
