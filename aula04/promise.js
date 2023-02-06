//É um objeto JavaScript com a promessa de que algo será realizado

//Pending: Estado inicial, assim que o objeto da promessa é iniciado
//Fulfilled: A promessa foi concluída com sucesso
//Rejected: A promessa foi rejeitada, houve um erro
//Settled: Seja com sucesso ou erro, ela foi finalmente concluída

// Promessa retorna com sucesso
console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	return resolve('carro chegou')
})

console.log('aguardando')

promessa.then(result => console.log(result))

// Promessa é rejeitada e usamos o catch() para capturar o erro
console.log('pedir uber') 
const promessa1 = new Promise((resolve, reject) => {
	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
let aceitar = true

console.log('pedir uber') 
const promessa2 = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}

	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))