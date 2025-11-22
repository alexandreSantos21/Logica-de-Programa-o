


const nomeHeroi = "Super Xandão"

let nivelXp = -200
let classificador


switch(true) {

    case (nivelXp >= 0 && nivelXp <= 1000):
        classificador = "Ferro"
        break

    case (nivelXp > 1000 && nivelXp <= 2000):
        classificador = "Bronze"
        break
    case (nivelXp > 2000 && nivelXp <= 5000):
        classificador = "Prata"
        break
    case (nivelXp > 5000 && nivelXp <= 7000):
        classificador = "Ouro"
        break
    case (nivelXp > 7000 && nivelXp <= 8000):
        classificador = "Platina"
        break
    case (nivelXp > 8000 && nivelXp <= 9000):
        classificador = "Ascendente"
        break
    case (nivelXp > 9000 && nivelXp <= 10000):
        classificador = "Imortal"
        break
    case (nivelXp > 10000):
        classificador = "Radiante"
        break
    default:
        classificador = "Inválido"

}


if (classificador === "Inválido") {
    console.log("Você Digitou um valor Inválido")
}else {

    console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${classificador}`)
}
