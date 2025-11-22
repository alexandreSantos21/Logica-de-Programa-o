


// AND (&&)

let idade = 18
let idadePermitida = idade >= 18

let permissao = "Sim"

if (idade && permissao === "Sim") {
    console.log("O Aluno poderá ir a escola")
}else {
    console.log("Não,O aluno não poderá ir a festa")
}

// Not  (||)


let chuva 

let chaoSeco = false

if (chaoSeco) {
    chuva = true
}
else {
    chuva = false
}

let temProtetor = false

let personagemPodeSair = chuva || temProtetor


if (personagemPodeSair) {
    console.log("O personagem pode sair da caverna")

}else {
    console.log("O personagem tem que ficar seguro na caverna")
}



// Not (!)

let tempo = "chuva"
let resultado = tempo !== "chuva"

console.log(!resultado)