class Caneta {

    constructor(m, c, p) {
        this.tampar()
        this.rabiscar()
        this.setModelo(m)
        this.setCor(c)
        this.setPonta(p)
    }

    setCor(c) {
        this.cor = c
    }

    getCor() {
        return c1.getCor()
    }

    getModelo() {
        return c1.getModelo()
    }
    
    setModelo(m) {
        this.modelo = m
    }

    getPonta() {
        return c1.getPonta()
    }

    setPonta(p) {
        this.ponta = p
    }

    rabiscar() { // publico
        if (this.tampada == 'tampada') {
            console.log('Erro, a caneta está tampada')
        } else {
            console.log('Rabisco')
        }
    }

    tampar() { // privado
        this.tampada = 'tampada'
    }

    destampar() { // privado
        this.tampada = 'destampada'
    }
}

let c1 = new Caneta('BIC', 'AZUL', '0.5')
console.log(c1)