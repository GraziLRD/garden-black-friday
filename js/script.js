const form = document.getElementById('form')

let emailValido = (email) => {
    if(email){
        let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

        return reg.test(email);
    }

    return false;
}

let nomePreenchido = (nome) => {
    return nome && nome.length > 3
}


form.addEventListener('submit', (e) => {
    document.getElementById('spanEmailInvalido').setAttribute("style", "disable: none");
    document.getElementById('spanNomeInvalido').setAttribute("style", "disable: none");
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if(emailValido(email) && nomePreenchido(nome)){
        let data = {
            nome,
            email,
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        let content = document.getElementById('content');
    
        let carregando = `<p>Enviando...</p>`
    
        let pronto = `<p>Obrigada!</p>`
    
        content.innerHTML = carregando;
    
        setTimeout(() => {
            content.innerHTML = pronto;
        }, 1000)
    }
    if(!nomePreenchido(nome)) {
        document.getElementById('spanNomeInvalido').setAttribute("style", "disable: block"); 
    } else {
        document.getElementById('spanNomeInvalido').setAttribute("style", "disable: none");
    }

    if(!emailValido(email)) {
        document.getElementById('spanEmailInvalido').setAttribute("style", "disable: block"); 
    } else {
        document.getElementById('spanEmailInvalido').setAttribute("style", "disable: none");
    }
    
})