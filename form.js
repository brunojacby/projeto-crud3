const incluir = () => {
    cadastro.push(retornaValoresFormulario())
    document.getElementById('idForm').reset()
}

const excluirCadastro = indice => {
    cadastro = cadastro.filter( (e,i) => i != indice)
    exibeTabela()
}

const editar = indice => {
    cadastro[indice] = retornaValoresFormulario()
    exibeTabela(indice)
}

const retornaValoresFormulario = () => {
    return {
        nome: document.getElementById('idNome').value,
        email: document.getElementById('idEmail').value,
        obs: document.getElementById('idArea').value,
        setor: document.querySelector('input[name="setor"]:checked')?.value || '',
        supervisor: document.getElementById('idSupervisor').checked?"Sim":"No",
    }
}

const exibeForm = (indice = -1) => {

    let area = 'idAreaPrincipal'
    let acao = "incluir()"
    let nomeBotao = "Cadastrar"
    let nome = "", email = "", obs ="", setor ="", supervisor =""
    
    if (indice > -1) {
        area = 'idAreaSecundaria'
        acao = `editar(${indice})`
        nomeBotao = "Atualizar";
        ({nome, email, obs, setor, supervisor} = cadastro[indice])
        
    } 

    else {
        document.getElementById('idAreaSecundaria').innerHTML = ''
    }

    document.getElementById(area).innerHTML = `
        <form id="idForm">
        <div class="row mb-3">
            <label for="idNome" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="idNome" value="${nome}">
            </div>
        </div>
        <div class="row mb-3">
            <label for="idEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="idEmail" value="${email}">
            </div>
        </div>
        <div class="mb-3">
            <label for="idArea" class="form-label">Observações</label>
            <textarea class="form-control" id="idArea">${obs}</textarea>
        </div>
        <fieldset class="row mb-3" id="idSetor">
            <legend class="col-form-label col-sm-2 pt-0">Setor</legend>
            <div class="col-sm-10">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="setor" ${setor=="Administrativo"?"checked":""} id="idAdm" value="Administrativo">
                <label class="form-check-label" for="adm">
                Administrativo
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="setor" id="fin" ${setor=="Financeiro"?"checked":""} value="Financeiro">
                <label class="form-check-label" for="fin">
                Financeiro
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="setor" id="vendas" ${setor=="Vendas"?"checked":""} value="Vendas">
                <label class="form-check-label" for="vendas">
                Vendas
                </label>
            </div>
            </div>
        </fieldset>
        <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="idSupervisor" ${supervisor=="Sim"?"checked":""}>
                <label class="form-check-label" for="idSupervisor">
                Supervisor
                </label>
            </div>
            </div>
        </div>
        <button type="button" onclick="${acao}" class="btn btn-primary">${nomeBotao}</button>
    </form>
    `
}
