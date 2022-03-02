let pessoa = {
    nome: 'Lourenço',
    idade: 26,
    genMusical: 'tudo, menos FUNK.'
}


let copy = (body) => {
    let novaPessoa = {
        ...body,
        comidaFav: ['Pizza', 'Batatas-Fritas', 'Peixe'],
        melhorAmigo: {
            nome: 'Natália',
            idade: 24
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidaFav[0]}, ${novaPessoa.comidaFav[1]} e ${novaPessoa.comidaFav[2]}. Sua melhor amiga se chama ${novaPessoa.melhorAmigo.nome} tem ${novaPessoa.melhorAmigo.idade} anos.\n`) 
}



copy(pessoa)

//conferir na aula de hj