const nome = "Hugo Boller";
let nome2 = ""
let pessoaDefault = {
    nome: "Hugo Boller",
    idade: "33",
    trabalho: "Vagabundo",
}
let nomes = ["Hugo Boller", "Juh Boller", "Diogo Del Gaudio"];
let pessoas = [
    {
    nome: "Hugo Boller",
    idade: "33",
    trabalho: "Vagabundo",
    },
    {
        nome: "Juh Boller",
        idade: "32",
        trabalho: "Raladora",
    },
    {
        nome: "Diogo Del Gaudio",
        idade: "36",
        trabalho: "Imigrante endinheirado",
    }

]

function alterarNome () {
    nome2 = "Maria Bernardete";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:")
    console.log(pessoa.nome );

    console.log("idade:")
    console.log(pessoa.idade );

    console.log("Trabalho:")
    console.log(pessoa.trabalho );
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)

}
function imprimirPessoas(){
    console.log("------IMPRESSÃO-----");
    pessoas.forEach(item => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:")
        console.log(item.idade );

        console.log("Trabalho:")
        console.log(item.trabalho );
        
    })

}

imprimirPessoas();

adicionarPessoa({
    nome: "Cybelle Boller",
    idade: 65,
    trabalho: "cuidar de caes"
});

imprimirPessoas();




//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Juh Boller",
//    idade: "32",
//    trabalho: "Proff",

//})


//recebeEalteraNome("João Silva");

//alterarNome();