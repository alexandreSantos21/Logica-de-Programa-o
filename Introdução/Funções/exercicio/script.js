let calculo

function emprestimo(nome="Usuario",valor=0) {


    if (valor > 0 || valor <= 2000) {
        return (valor * 10) / 100
    }
    else if (valor > 2000 || valor <= 5000) {
        return (valor * 20) / 100
        
    }
    else if (valor > 5000 || valor <= 10000) {
        return (valor * 35) / 100
    }
    else{
        return 0
    }
}


function recebeDadosUsuario(nome,valor) {
    return [nome,valor]
}

function valorTotal() {

    dados = recebeDadosUsuario("Vanessa",1551)
    juros = emprestimo(dados[0],dados[1])
    valorLimite = 10000

    if (dados[1] <= valorLimite) {

        calculo = dados[1] + juros
        return calculo
    }
    else {
        return 0
    }
    

}

function main() {
    
    valor = valorTotal()

    if (valor > 0) {
        console.log(`O total valor total do seu emprestimo será ${valor}`)
    }else {
        console.log("Não podemos fazer emprestimo com valores acima de 10 mil Reais ")
    }
}

main()