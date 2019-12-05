function testarformulario(form) {
    if(form.texto.value == ""){
        alert("Insira a mensagem");
		form.mensagem.focus();
		return false;
    }
    alert("Sugestão enviada com sucesso, aguarda pois leremos e responderemos se podermos!");
	return true;
}