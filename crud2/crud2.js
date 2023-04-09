'use script'

const openModal = () => document.getElementById('modal')
	.classList.add('active')

const closeModal = () => document.getElementById('modal')
	.classList.remove('active')

const tempClient = {
	nome: "Ana",
	email: "ana@gmail.com",
	celular: "+550929999-9999",
	cidade: "São Roque"
}

const getLocalStorage = JSON.parse (localStorage.getItem('db_client')) ?? []

const setLocalStorage = (dbClient) => localStorage.setIte("db_client", JSON.stringify (dbClient)) 



// CRUD 

const readClient = () => getLocalStorage()



const createClient = (client) => {
	//const db_client = JSON.parse (localStorage.getItem('db_client')) ?? [] //pega o que tem no banco de dados localStorage, transforma em json e armazena numa variavel chamada db_client
	const dbClient = getLocalStorage()
	
	dbClient.push (client) // acrescenta mais um (Push), o client, esse client chegou pelo parâmetro
	setLocalStorage(dbClient )
	//localStorage.setIte("db_client", JSON.stringify (db_client)) // mandar de novo para meu banco, informando o db_client, seria nesse a key, e o value seria JSON.stringfy (db_client)
}



// Eventos 
document.getElementById('cadastrarCliente')
	.addEventListener('click', openModal)

document.getElementById('modalClose')
	.addEventListener('click', closeModal)