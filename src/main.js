// Guardando os valores do input
function AdicionaCarteira() {
    let nomeCarteira = document.getElementById("titulo").value;
    let rendaAtual = parseFloat(document.getElementById("renda").value);
    let saldoDevedor = 0;

    const lista = document.querySelector("#listaCarteira")
    const linha = document.createElement('tr');

    linha.innerHTML = `

        <td>${nomeCarteira}</td>
        <td>${rendaAtual}</td>
        <td>${saldoDevedor}</td>
        <td> <a href="#" class="btn btn-danger btn-sm delete"> Remover </a> </td>
        
        `;

        lista.appendChild(linha);

        for(let i = 0; i < lista.rows.length; i++)
        {
            lista.rows[i].cells[3].onclick = function(){
                index = this.parentElement.rowIndex;
                lista.deleteRow(index);
                console.log(index);
            };

        }
};














// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("enviar").onkeypress = function (e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        e.preventDefault();
        AdicionaCarteira();

    }
};
// Evento que é executado ao clicar no botão de enviar
document.getElementById("enviar").onclick = function (e) {
    
    e.preventDefault();
    AdicionaCarteira();
}