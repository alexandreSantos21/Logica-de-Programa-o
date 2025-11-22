


// Praticando If - Else

let ligado = true

if (ligado) {
    console.log("Sim está ligado")
}

let mercadoTemLeite = false
let produtosComprado 

if (mercadoTemLeite) {
    produtosComprado = ["Pão","Trigo","Leite"]
}else {
    produtosComprado = "Pao"
}

console.log("Items comprados:" + produtosComprado)


// Praticando if - else if


let nivelDeFome = 1

if (nivelDeFome > 0 && nivelDeFome <= 3) {
    console.log("Vamos tomar apenas um café")
}else if (nivelDeFome > 3 && nivelDeFome <= 5) {
    console.log("Vamos comer um lanche")
}else if (nivelDeFome > 5 && nivelDeFome <= 10)
    console.log("Vamos fazer uma lasanha para jantarmos")
else {
    console.log("Você não digitou um valor valido")
}