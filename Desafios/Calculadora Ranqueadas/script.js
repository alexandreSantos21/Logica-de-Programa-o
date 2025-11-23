

function calculoSaldo(vitorias,derrotas) {

    calculo = vitorias - derrotas

    return calculo

}




function classificacaoNivel(saldo) {
    
    if (saldo < 10) {
        return "Ferro"
    }else if (saldo > 10 && saldo <= 20) {
        return "Bronze"
    }else if (saldo > 20 && saldo <= 50) {
        return "Prata"
    }else if (saldo > 50 && saldo <= 80) {
        return "Ouro"
    }else if (saldo > 80 && saldo <= 90) {
        return "Diamante"
    }else if (saldo > 90 && saldo <= 100) {
        return "Lendário"
    }else {
        return "Imortal"
    }

}

function main() {
    let saldoVitorias = calculoSaldo(99,9)
    let nivel = classificacaoNivel(saldoVitorias)

    console.log(`O Herói de saldo de ${saldoVitorias} e está no nivel de ${nivel}`)
}

main()