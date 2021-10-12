class Caneta {

    constructor () {
        this.modelo = 'bic01' //publico
        this.cor = 'azul' // publico
        this.ponta = 'esferica' // privado
        this.carga = 100 // protegido
        this.tampada = false // protegido
    }

    rabiscar() { // publico
        if (this.tampada == true) {
            console.log('Erro, a caneta está tampada')
        } else {
            console.log('Rabisco')
        }
    }

    tampar() { // privado
        this.tampada = true
    }

    destampar() { // privado
        this.tampada = false
    }

    adicionar() { // privado
        this.cor = window.document.querySelector('#in01').value
        
    }
}

let c1 = new Caneta()
c1.cor = 'azul'
c1.destampar()
c1.rabiscar()
console.log(c1)

class Bloco {

    constructor() {
        this.tipo = 'Terra' 
        this.minerar = 'Qualquer'
        this.raridade = 'Muito-Comum'
        this.aparencia = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3d/Grass_Block_BE1.png/revision/latest?cb=20200830155913'
    }

    picaretaDeMadeira() {
        if (this.minerar == 'Qualquer') {
            console.log('Picareta de Madeira: Estou minerando')
        } else {
            console.log('Picareta de Madeira: Minerio não pode ser minerado')
        }
    }

    picaretaDeFerro() {
        if (this.minerar == 'Qualquer' || this.minerar != 'Qualquer') {
            console.log('Picareta de Ferro: Estou minerando')
        }
    } 
}

let b1 = new Bloco()
b1.tipo = 'Diamante'
b1.minerar = 'Ferro'
b1.raridade = 'Raro'
b1.aparencia = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/29/Diamond_Ore_JE5_BE5.png/revision/latest?cb=20210326000237'
b1.picaretaDeMadeira()
b1.picaretaDeFerro()
console.log(b1)

let b2 = new Bloco()
b2.tipo = 'Terra'
b2.minerar = 'Qualquer'
b2.raridade = 'Normal'
b2.picaretaDeMadeira()
b2.picaretaDeFerro()
console.log(b2)
