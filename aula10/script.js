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

class Visitante extends Pessoa {

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

    pagarMensalidade() {

    }
}
 
class Bolsista extends Aluno {

    #bolsa

    set bolsa(b) {
        this.#bolsa = b
    }

    get bolsa() {
        return this.#bolsa
    }

    pagarMensalidade() {

    }
}