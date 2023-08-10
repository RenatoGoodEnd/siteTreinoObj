const botaoAdd = document.getElementById("addTreino");
const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("listaExercicios")) || [];
const listaFiltrada = novaLista(letraDaLista);

listaFiltrada.forEach(ordenarId)

const elementoDoTreino = document.getElementById("tabela__elemento");

construirPagina(listaFiltrada);

const pagina = document.querySelector(".mainNormal")
console.log(pagina.className)
if (listaFiltrada.length > 8 ){
	pagina.className = "mainAuto";
}

const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('.tabela__peso');
const excluir = document.querySelectorAll('.btn__exTreino');

exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)
excluir.forEach(excluirTreino)
	
botaoAdd.addEventListener('click', () => {
	const novoItem2 = 
	{
		"lista": letraDaLista,
		"id": listaFiltrada.length,
		"treino": "",
		"peso": ""
	}
	const listaDeExercicioA = JSON.parse(localStorage.getItem("listaExercicios")) || [];
	listaDeExercicioA.push(novoItem2);
	localStorage.setItem("listaExercicios", JSON.stringify(listaDeExercicioA));
	location.reload();
	});

//Essa funcao separa a lista que sera apresentada na pagina e ordena o ID 
function novaLista(testador){
	const listaDoTestador = listaDeExercicio.filter(elemento => {return elemento.lista === testador});
//___________________________________________________________________________________________________
	//Limpa lista da lista do exercicio da pagina para reorganizar o id
	const listaSemTestador = listaDeExercicio.filter(elemento => {return elemento.lista != testador});
	localStorage.setItem("listaExercicios", JSON.stringify(listaSemTestador));
//___________________________________________________________________________________________________
	
	//Ordenando ID da listaFiltrada para construcao da pagina
	return listaDoTestador.map((lista, index) => {
	return {...lista, id: listaDoTestador.id = index}});
}

//Salva a lista com a ordem certa dos IDs
function ordenarId(listaAposFiltro){
	const listaProvisoria = JSON.parse(localStorage.getItem("listaExercicios"))
	listaProvisoria.push(listaAposFiltro);
	localStorage.setItem("listaExercicios", JSON.stringify(listaProvisoria));
}



function excluirTreino(treinoExcluido, index){
	//Cria uma lista sem o Item a ser excluido e atualiza a lista do LS
	treinoExcluido.addEventListener('click', () => {
	const listaDeExercicioB = JSON.parse(localStorage.getItem("listaExercicios")) || [];
	const excluir = listaDeExercicioB.filter(elemento => 
             (elemento.lista === letraDaLista && elemento.id != index) || elemento.lista != letraDaLista);
	//console.log(treinoExcluido);
	localStorage.setItem("listaExercicios", JSON.stringify(excluir));
	
	//recarrega a pagina
	location.reload();
	});	
}