function construirPagina(listaDeTreino){
    listaDeTreino.forEach(element => {
        elementoDoTreino.innerHTML += `
        <tr>
        <td class="tabela__elemento">
            <textarea name="Exercício" onkeypress="digitar(event)" tabIndex="${element.id}" class="tabela__exercicio" cols="17" rows="2">${element.treino}</textarea>
        </td>
        <td class="tabela__elemento">
            <input type="number" name="Peso" class="tabela__peso" cols="2" rows="1" value="${element.peso}">
        </td>
        <td class="tabela__check">
            <input type="checkbox">
        </td>
        <td class="tabela__btn container__btn--exTreino">
            <input type="button" class="btn btn__exTreino" value="🗑️">
        </td>
    </tr>
        `
        
    });

}