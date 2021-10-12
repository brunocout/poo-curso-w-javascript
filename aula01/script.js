class Produto {

    constructor() {
        this.id = 1
        this.arrProdutos = []
        this.editId = null
    }

    salvar() {
        let produto = this.dados()

        if (this.validacao(produto)) {
            if (this.editId == null) {
                this.adicionar(produto)
            } else {
                this.atualizar(this.editId, produto)
            }
            
            
        }
        this.lista()
        this.cancelar()
        console.log(produto)
    }
    
    lista() {
       let tbody = window.document.querySelector('tbody')
       tbody.innerHTML = ''

       for (let i = 0; i < this.arrProdutos.length; i++) {
           let tr =  tbody.insertRow()

           let td_id = tr.insertCell()
           let td_produto = tr.insertCell()
           let td_valor = tr.insertCell()
           let td_acoes = tr.insertCell()

           td_id.innerHTML = this.arrProdutos[i].id
           td_produto.innerHTML = this.arrProdutos[i].nomeProduto
           td_valor.innerHTML = 'R$ ' + this.arrProdutos[i].valor
           td_acoes.innerHTML = `
           <button class="btn-action" id="btnEdit"><i class="far fa-edit"></i></button>
           <button type="button" class="btn-action" onclick="produto.deletar(${this.arrProdutos[i].id})"><i class="far fa-trash-alt"></i></button>
           `
           let btnEdit = window.document.querySelector('#btnEdit')
           btnEdit.setAttribute('onclick', 'produto.editar('+JSON.stringify(this.arrProdutos[i])+')')
       }
    }

    adicionar(produto) {
        produto.valor = parseFloat(produto.valor)
        this.arrProdutos.push(produto)
        this.id++
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrProdutos.length; i++) {
            if(this.arrProdutos[i].id == id) {
                this.arrProdutos[i].nomeProduto = produto.nomeProduto
                this.arrProdutos[i].valor = produto.valor
            }
        }
    }

    editar(dados) {
        this.editId = dados.id
        window.document.querySelector('#produto').value = dados.nomeProduto
        window.document.querySelector('#valor').value = dados.valor

        window.document.querySelector('#btn-salvar').innerHTML = 'Atualizar'
    }

    dados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = window.document.querySelector('#produto').value
        produto.valor = window.document.querySelector('#valor').value

        return produto
    }

    validacao(produto) {

        let msg = ''

        if (produto.nomeProduto == '') {
            msg += '- Informe o nome do Produto \n'
        }
        if (produto.valor == '') {
            msg += '- Informe o valor do Produto \n'
        }

        if (msg != '') {
            alert(msg)
            return false
        } else {
            return true
        }
    }

    cancelar() {
        window.document.querySelector('#produto').value = ''
        window.document.querySelector('#valor').value = ''
        
        window.document.querySelector('#btn-salvar').innerHTML = 'Salvar'
        this.editId = null
    }
    
    deletar(id) {
        if (confirm(`Deseja realmente deletar o produto ${id} da lista ?`)) {
            let tbody = window.document.querySelector('tbody')
            for (let i = 0; i < this.arrProdutos.length; i++) {
                if (this.arrProdutos[i].id == id) {
                    this.arrProdutos.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }
}

let produto = new Produto()