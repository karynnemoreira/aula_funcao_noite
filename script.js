//Revisão de operadores
// a ordem dos operadores alteram o resultado

// let a = 2;
// let b = 1;
//a =-b //errada 
// a -= b //certa
// console.log(a)

// += -= *= /=

//Propriedades de string(textual)
// "", '', ``
//Só posso usar os caracteres $ ou _ para nomear uma variável
// let fruta = "Laranja"
// let $fruta = "Morango"
// let _fruta = "Abacaxi"


//bônus 1 (treta) - replace 
//replace: troca um pedaço da sua string por outra coisa.

// let frase = "Gatos são os melhores amigos do humano"

// frase = frase.replace("Gatos", "Cachorros");
// console.log(frase);

//Bônus 2 - length
//Length: conta cada unidade de código na string

// let _nome = "Eduardo"

// if(_nome.length < 6){
// console.log("Seu nome tem menos de 6 letras")
// } else {
//     console.log(`${_nome} não tem 6 letras`)
// }

//Bônus 3 - substring
//substring - percorre as unidade de uma string
// (inicia , para)

// let $nome = "Rihanna";

// if ($nome.substring (0, 1) === "L"){
//    console.log("Seu nome começa com a letra L") 
// } else{
//     console.log(`${$nome}, seu nome não começa com a letra L`)
// }

// let animal = "Dinossauro"

// if(animal.substring (0, 1) === "V"){
// console.log (`${animal} começa com a letra V`)
// }else{
//     console.log (`${animal} NÃO começa com a letra V`)
// }

//------- Matéria nova

//Estrutura básica de uma função

// function identificador (){
//     tarefa
// }
//identificador () //invocando/chamando/ativando a função

//----------
//Podemos atribuir variáveis dentro de uma função 
// let variavel = function (){

// }


//Função com parâmetro: 

// function mostrar (cantora){
//     console.log(`Meu nome é `+ cantora)
// }
// mostrar (`Beyoncé`)
// mostrar (`Shakira`)
// mostrar (`Ciara`)

//O argumento é a resposta que o parâmetro espera


//---------
//Declarar funções dentro de variáveis

//Estrutura
// let infos = function (nome, idade, cidade){

//     console.log(nome)
//     console.log(idade)
//     console.log(cidade)
// }

// infos("Brendon", "24 anos", "Rio de Janeiro")

//--------------
//Declarar variáveis dentro do parâmetro ()

// let nomeDinamico = "Miguel"
// function mostrarNome(nome){
// console.log(`Meu nome é ${nome}`)
// }
// mostrarNome (nomeDinamico)

//------

// let mercado = "Laranja, Uva, Abacaxi"

// function mercadinho (guanabara){
// console.log(`Tem as frutas ${guanabara}`)
// }
// mercadinho (mercado)

//Função com return
//Return: Finaliza uma função e retorna um valor para onde essa função foi chamada.

//Console.log: Apenas exibe os vaores em tela


// function soma (n1 ,n2){
// return n1 + n2
// }
// console.log(soma (20, 4))


// function dobro (numero){
//     return numero * 2
// }
// console.log(dobro(15))

//------

// function dividir (num) {
//     return num / 5 //dividir o num por 5
// }
// console.log(dividir(20))


//-------
// let copo = vitamina ("banana ", "mamão")

// function vitamina (fruta1, fruta2){
//     return fruta1 + fruta2
// }

// console.log(`Dentro do meu copo tem  ${copo}`)

//--------- 

//Criei uma função para exibir uma mensagem no console.log
// function oi(){
//     console.log(`Boa noite!`)
// }
// oi ();

//Criar uma função que receba um nome como parâmetro e o exiba no console.log

// function oi2 (t3){
// console.log (`${t3}`)
// }
// oi2(`Cenoura`) 

//FUNÇÃO COM PARÂMETRO 

//ESTRUTURA BÁSICA DA FUNÇÃO COM PARÂMETRO É: 

// function nomeDaFuncao(caixinhaReservadaParaUmFuturoValor){
// console.log(caixinhaReservadaParaUmFuturoValor)
// }
// nomeDaFuncao("Aqui coloco o meu valor")

//ex1
// function nome (valor){
// console.log(valor)
// }
// nome("Karynne")

//ex2
// function mostrarAnimais (animal1, animal2, animal3){
//     console.log(animal1, animal2, animal3)
// }
// mostrarAnimais("macaco","papagaio","girafa")

//ex3
// function turma (naoSeiAinda){
// console.log(`Olá, boa noite ${naoSeiAinda}`)
// }
// turma("t3")

//Função com return
//Estrutura básica de uma função com return

// function nomeDaFuncao(amendoim){
// return amendoim * 2
// }
// console.log(nomeDaFuncao(7))
// //amendoim = 7

//ex2

// function comida (apelido){
// return apelido + "arroz"
// }
// console.log(comida("Feijão"))

//ex3

// function misturado(numero, nome){
//     return numero + nome 
// }
// console.log(misturado(30, "Brendon"))


//UTILIZANDO VARIÁVEL DENTRO DE UM PARÂMETRO

// let hortifruti = "Morango" //criei uma variável

// function mostrarFruta(fruta){
// console.log(`Eu sou a fruta: ${fruta}`)
// }
// mostrarFruta(hortifruti)



//ex2

//variável

// let concessionaria = "Honda"
// function mostrarConcessionaria(marca){
// console.log(marca)
// }
// mostrarConcessionaria(concessionaria)


//parâmetro

// function mostrarConcessionaria(marca){
//     console.log(marca)
// }
// mostrarConcessionaria("Fiat")


//Switch: é uma estrutura condicional 

//Estrutura básica do switch

// switch(variável){
// case condição:
//     console.log(ação)
//     break; //fechamento da condição
//     default: //se não for, me mostra uma mensagem.
//     console.log('caso seja false')
// }

// let roupa = "roupão"
// switch (roupa) {
//     case "camisa":
//         console.log("Essa é uma bela camisa")
//         break;
//     default:
//         console.log("Isso não é uma camisa")
// }


//Exemplo: Se a idade for 26 retorna que ou maior de idade; se for 17 retorna que sou menor de idade; Caso não seja nenhuma das duas retorne uma mensagem no default

// let idade = 16;

// switch (idade) {
//     case 26:
//         console.log("Você é maior de idade")
//         break;
//     case 17:
//         console.log("Você é menor de idade")
//         break;
//         default: 
//         console.log("Não foi possível verificar essas informações")
// }

//ex3

let carro = "Chevette"

switch (carro) {
    case "uno":
        console.log("Você é um uninho")
        break;
    case "gol":
        console.log("Você não é pálio para o uninho")
        break;
    default:
        console.log("Você não é pálio para o uninho")
}


//Para testar

/* Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um
perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais,
cítrico e frutal. Utilizando uma estrutura switch/case , caso o comprador queira o floral,
retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere outro aroma?”. Caso seja especificado um aroma que não está
disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”. */
