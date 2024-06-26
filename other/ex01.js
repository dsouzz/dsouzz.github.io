/*
Objetivo: Mostrar uma lista de 10 nomes inseridos pelo usuário em uma página na web;
Autor: dsouzz;
Data: 25/06/2024.
*/

// var nome = window.prompt("Insira um nome: ");


// Declaração das variáveis pricipais
var nomes = Array();
var max = 10;

// Guarda os nomes inseridos
for (i=0; i < max; i++) {;
    var nome = window.prompt("Insira o nome #"+(i + 1)+": ");
    nomes[i] = nome;
}
// Mostra os nomes inseridos
document.write("<h1>Os nomes inseridos foram:</h1>");
document.write("<ol>");
nomes.forEach(function(nome) {
    document.write("<p><strong>"+nome+"</strong></p><br>");
});
document.write("</ol>");
