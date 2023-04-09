"use strict";
'use script';

var openModal = function openModal() {
  return document.getElementById('modal').classList.add('active');
};

var closeModal = function closeModal() {
  return document.getElementById('modal').classList.remove('active');
};

var tempClient = {
  nome: "Andreza",
  email: "andrezasilva744@gmail.com",
  celular: "+550929999-9999",
  cidade: "São Roque"
}; // CRUD 

var createClient = function createClient(client) {
  localStorage.setIte("db_client", JSON.stringify(client));
}; // Eventos 


document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
//# sourceMappingURL=crud2.dev.js.map
