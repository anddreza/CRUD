// [CRUD] Javascript BÁSICO 
const miniTwitter = {
	usuarios: [
		{
			username: 'anddrezas',
		}
		
	],
		posts: [
			{
				id: 1,
				owner: 'anddrezas',
				content: 'Meu primeiro tweet'
		}
	],


};

// CREATE 
function criarPost(dados){
	miniTwitter.posts.push({
		id: miniTwitter.posts.length + 1,
		owner: dados.owner,
		content: dados.content
	})
}
criarPost({ owner: 'anddrezas', content: 'Segundo tweet' });
criarPost({ owner: 'anddrezas', content: 'Terceiro tweet' });
console.log(miniTwitter.posts)

// READ
function pegaPosts(){
	return miniTwitter.posts;
}
console.log(pegaPosts())


// UPDATE
function atualizaContentDoPost(id, novoConteudo){
	const postQueVaiSerAtualizado =  pegaPosts().find((post) => {
		return post.id === id; 
	});
	console.log(postQueVaiSerAtualizado)
	postQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentDoPost('Novo conteúdo do post')

// DELETE

function apagaPost(id){
	const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
		return postAtual.id !== id;
	});

	console.log(listaDePostsAtualizada);
}
apagaPost(1);