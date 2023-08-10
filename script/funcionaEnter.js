function digitar(e){
    if(e.keyCode == 13){
        e.preventDefault();
        exercicio[e.target.tabIndex + 1].focus();
    }
}