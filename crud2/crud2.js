'use script'

const openModal = () => document.getElementById('modal')
	.classList.add('active')

const closeModal = () => document.getElementById('modal')
	.classList.remove('active')

const tempClient = {
	nome: "Andreza",
	email: "andrezasilva744@gmail.com",
	celular: "+550929999-9999",
	cidade: "São Roque"
}	
// CRUD 
const createClient = (client) => {
	localStorage.setIte("db_client", JSON.stringify (client))

}


// Eventos 
document.getElementById('cadastrarCliente')
	.addEventListener('click', openModal)

document.getElementById('modalClose')
	.addEventListener('click', closeModal)