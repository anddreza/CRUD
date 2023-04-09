"use strict";
'use script';

var openModal = function openModal() {
  return document.getElementById('modal').classList.add('active');
};

var closeModal = function closeModal() {
  return document.getElementById('modal').classList.remove('active');
};

var tempClient = {
  nome: "Ana",
  email: "ana@gmail.com",
  celular: "+550929999-9999",
  cidade: "São Roque"
}; // CRUD 

var createClient = function createClient(client) {
  var db_client = JSON.parse(localStorage.getItem('db_client')); //pega o que tem no banco de dados localStorage, transforma em json e armazena numa variavel chamada db_client

  console.log(db_client);
  db_client.push(client); // acrescenta mais um (Push), o client, esse client chegou pelo parâmetro

  localStorage.setIte("db_client", JSON.stringify(db_client)); // mandar de novo para meu banco, informando o db_client, seria nesse a key, e o value seria JSON.stringfy (db_client)
}; // Eventos 


document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
//# sourceMappingURL=crud2.dev.js.map
