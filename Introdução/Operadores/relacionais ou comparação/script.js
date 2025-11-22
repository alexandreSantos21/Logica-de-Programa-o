

let numero = 1
let marca = "Apple"


// Devemos guardar o resultado das comparações em uma variavel

let resultado = marca === "Samsung"

console.log(numero == 1)
console.log(numero === "1")
console.log(resultado)


const cpfBloqueado = "121.246.895-53"
let cfpUsuario = "121.246.895-53"

let comparaCpf = cpfBloqueado !== cfpUsuario

if (comparaCpf) {
    console.log("O dono do CPF está permitido a viajar")
}else {
    console.log("O Dono do CPF esta sendo procurado pela justiça")
}



// Ultilizando operadores de comparação maior e menor 

let idadePermitida = 18
let idadeUsuario = 18
let sistemaPermissao = idadeUsuario >= idadePermitida

console.log("O usuario está permitido? " + sistemaPermissao)

let idadeDeCorte = 50
let idade = 40

let verificacaoCorte = idadeDeCorte <= idade

console.log("O usuario esta dentro da idade de corte?" + verificacaoCorte)