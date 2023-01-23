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

function oi2 (t3){
console.log (`${t3}`)
}
oi2(`Cenoura`) 