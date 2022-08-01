// Guardando os valores do input
function AdicionaCarteira() {
    let nomeCarteira = document.getElementById("titulo").value;
    let rendaAtual = document.getElementById("renda").value;
    let saldoDevedor = 0;

    //validação dos inputs

    if(nomeCarteira === "" || nomeCarteira.length <= 3){
        alert("O nome da certeira é muito curto !");
        
    }else if (rendaAtual === "" || rendaAtual < 0.00) {
        alert("Renda inicial muito curta !");
   
    }else{
        
        const lista = document.querySelector("#listaCarteira")
        const linha = document.createElement('tr');
        const keyId = Math.random();
        linha.setAttribute('key-id', keyId);
    
        linha.innerHTML = `
    
        <td>${nomeCarteira}</td>
        <td>${rendaAtual}</td>
        <td>${saldoDevedor}</td>
        <td><a href="#" class="btn btn-success btn-sm delete" id="remover">Abrir Carteira</a>
        <a href="#" class="btn btn-danger btn-sm delete" id="remover" onclick=buttonDelete(${keyId}) >Deletar Carteira</a></td>
        
        `;
    
        lista.appendChild(linha);

    }
};

// função que deleta as carteiras adicionada.
function buttonDelete(id) {
    const listaCarteira = document.querySelector('#listaCarteira');
    const atual = Array.from(listaCarteira.children).filter(linha => (
        linha.getAttribute('key-id') !== String(id)
    ));
    listaCarteira.innerHTML = '';
    atual.forEach(linha => {
        listaCarteira.append(linha)
    });
}


// Funcao para limpar o input 
function limpaInput (){

    document.getElementById("titulo").value = '';
    document.getElementById("renda").value = '';
}


// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("enviar").onkeypress = function (e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        e.preventDefault();
        AdicionaCarteira();
        limpaInput();
        

    }
};
// Evento que é executado ao clicar no botão de enviar
document.getElementById("enviar").onclick = function (e) {
    e.preventDefault();
    AdicionaCarteira();
    limpaInput();   
}


// função para realizar o tratamento da moeda, ela é chamada no html <input> 
function moeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}


