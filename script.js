document.getElementById('charForm').addEventListener('submit', function(event){
event.preventDefault();

//Variaveis
let nome = document.getElementById('nome').value;
let classe = document.getElementById('classe').value;
let raca = document.getElementById('raca').value;
let nivel = document.getElementById('nivel').value;
let forca = document.getElementById('for').value;
let destreza = document.getElementById('des').value;
let constituicao = document.getElementById('con').value;
let inteligencia = document.getElementById('int').value;
let sabedoria = document.getElementById('sab').value;
let carisma = document.getElementById('car').value;

//tabela
let tabela = document.getElementById('tabelaForm').getElementsByTagName('tbody')[0];

//nova linha
let inserir = tabela.insertRow();

//inseri valor na nova linha
inserir.insertCell(0).appendChild(document.createTextNode(nome));
inserir.insertCell(1).appendChild(document.createTextNode(classe));
inserir.insertCell(2).appendChild(document.createTextNode(raca));
inserir.insertCell(3).appendChild(document.createTextNode(nivel));
inserir.insertCell(4).appendChild(document.createTextNode(forca));
inserir.insertCell(5).appendChild(document.createTextNode(destreza));
inserir.insertCell(6).appendChild(document.createTextNode(constituicao));
inserir.insertCell(7).appendChild(document.createTextNode(inteligencia));
inserir.insertCell(8).appendChild(document.createTextNode(sabedoria));
inserir.insertCell(9).appendChild(document.createTextNode(carisma));

//reset
document.getElementById('charForm').reset();

})