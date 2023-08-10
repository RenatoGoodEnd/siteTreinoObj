function salvarTreino(valor, indice){
    valor.addEventListener('focusout', () => {
		const listaDeExercicioAtualizada = JSON.parse(localStorage.getItem("listaExercicios")) || [];
        const elementoPeso = peso[indice].value;
		const elementoTreino = exercicio[indice].value.trim();
        const existe = listaDeExercicioAtualizada.find(elemento => 
             elemento.lista === letraDaLista && elemento.id === indice);
 
        if(existe){
            existe.treino = elementoTreino;
            existe.peso = elementoPeso;
        }else{
            const novoItem = 
                    {
                        "lista": letraDaLista,
                        "id": indice,
                        "treino": elementoTreino,
                        "peso": elementoPeso
                    }
          listaDeExercicioAtualizada.push(novoItem);
        }
        localStorage.setItem("listaExercicios", JSON.stringify(listaDeExercicioAtualizada));
    });
}