function testarformulario() {
    let form = document.getElementById("texto").value;

    console.log(form)
    if(form == ""){
        alert("Por favor, preencha o formulário corretamente");
        return true;
        
    }else{
        alert("Sugestão enviada com sucesso, aguarda pois leremos e responderemos se podermos!");
        return false;
    }
    
	
}