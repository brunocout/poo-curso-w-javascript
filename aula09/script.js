class Pessoa {

    #nome 
    #idade
    #sexo

    set nome(n) {
        this.#nome = n
    }

    get nome() {
        return this.#nome
    }

    set idade(i) {
        this.#idade = i
    }

    get idade() {
        return this.#idade
    }

    set sexo(s) {
        this.#sexo = s
    }

    get sexo() {
        return this.#sexo
    }

    fazerAniver() {
        this.idade ++
    }
}

class Aluno extends Pessoa {

    #matr
    #curso

    set matr(m) {
        this.#matr = m
    }

    get matr() {
        return this.#matr
    }

    set curso(c) {
        this.#curso = c
    }

    get curso() {
        return this.#curso
    }

    cancelarMatr() {

    }
}

class Professor extends Pessoa {

    #espec
    #salario

    set espec(e) {
        this.#espec = e
    }

    get espec() {
        return this.#espec
    }

    set salario(s) {
        this.#salario = s
    }

    get salario() {
        return this.#salario
    }

    receberAum() {
        
    }
}

class Funcionario extends Pessoa {

    #setor
    #trab

    set setor(s) {
        this.#setor = s
    }

    get setor() {
        return this.#setor
    }

    set trab(t) {
        this.#trab = t
    }

    get trab() {
        return this.#trab
    }

    mudarTrab() {
        
    }
}

let p1 = new Pessoa()
let p2 = new Aluno()
let p3 = new Professor()
let p4 = new Funcionario()
p1.nome = 'Pedro'
p2.nome = 'Maria'
p3.nome = 'Cláudio'
p4.nome = 'Fabiana'
p2.curso = 'Informatica'
p3.salario = 2500.75
p4.setor = 'Estoque'
console.log(p2)