class Conta {

    #numConta
    #saldo
    #tipo
    #dono
    #status
    
    constructor() {
        this.setStatus('Fechada')
        this.saldo = 0
    }

    set numConta(n) {
        this.#numConta = n
    }

    get numConta() {
        return this.#numConta
    }

    set tipo(t) {
        this.#tipo = t
    }

    get tipo() {
        return this.#tipo
    }

    set dono(d) {
        this.#dono = d
    }

    get dono() {
        return this.#dono
    }

    set saldo(s) {
        this.#saldo += s
    }

    get saldo() {
        return this.#saldo
    }

    set status(st) {
        this.#status = st
    }
    
    get status() {
        return this.#status
    }

    depositar(dep) {
        if (this.status == 'Aberta') {
            this.saldo = this.saldo + dep
        } else {
            alert('Conta está fechada')
        }
    }

    sacar(saq) {
        if (this.status == 'Aberta') {
            if (this.saldo >= saq) {
                this.saldo = this.saldo - saq
            } else {
                alert('Saldo insuficiente')
            }
        } else {
            alert('Conta está fechada')
        }
    }

    abrirConta(t) {
        this.tipo = t
        this.status = 'Aberta'
        if (t == 'CC') {
            this.saldo = 50
        } else if (t == 'CP') {
            this.saldo = 150
        }
    }

    pagarMensal() {
        let m = 0

        if (this.tipo == 'CC') {
            m = 12
        } else if (this.tipo == 'CP') {
            m = 20
        }

        if (this.status == 'Aberta') {
            if (this.saldo >= m) {
                this.saldo = m
            } else {
                alert('Saldo insuficiente')
            }
        } else {
            alert('Conta fechada')
        }
    }

    fecharConta() {
        if (this.saldo > 0) {
            alert('Impossivel de progesseguir saldo positivo.')
        } else if(this.saldo < 0) {
            alert('Conta em débito')
        } else {
            this.status = 'Fechada'
        }
    }
}

let c1 = new Conta()

if (confirm('Deseja criar uma conta?') == true) {

    let nome = prompt('Digite o nome da conta')
    c1.setDono(nome)

    let numConta = prompt('Digite o número da conta')
    c1.setNumConta(numConta)

    let tipo = prompt('Digite o tipo da conta considerando que "CP" é Conta Poupança e "CC" é Conta Corrente.')

    if (tipo != null) {
        c1.abrirConta(tipo)
    }
    
    if (confirm('Deseja fazer um depósito?') == true) {
        var dep = prompt('Digite o valor do depósito')
        c1.depositar(+ dep)
    }

    c1.sacar(150)
    c1.fecharConta()

    console.log(c1)
}

