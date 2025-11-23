

function torrar() {
    console.log("Hello word")
}


contador = 10
 

function contagem(valor) {

    for (let i = 0; i <= valor;i++) {
        console.log(i)
    }


}

let paoUser

function torrar(pao) {

    console.log("Torrada feita " + pao)
    paoUser = pao
}

torrar("Pão Integral")
console.log(paoUser)




function getFirstName(name,splitChar="-") {
    let firstName = name.split(splitChar)[0]
    return firstName

} 


let nameUser = getFirstName("Alexandre-henrique dos santos")
console.log(`Seja bem vindo ${nameUser}`)

