const exibeDado = indice => {

    let {nome, email, obs, setor, supervisor} = cadastro[indice]

    document.getElementById('idAreaSecundaria').innerHTML = `
    <dl class="row">

        <dt class="col-sm-3">Nome</dt>
        <dd class="col-sm-9">${nome}</dd>

        <dt class="col-sm-3">Email</dt>
        <dd class="col-sm-9">${email}</dd>
    
        <dt class="col-sm-3">Observações</dt>
        <dd class="col-sm-9">${obs}</dd>
    
        <dt class="col-sm-3 text-truncate">Setor</dt>
        <dd class="col-sm-9">${setor}</dd>

        <dt class="col-sm-3 text-truncate">Supervisor</dt>
        <dd class="col-sm-9">${supervisor}</dd>
    
    </dl>
    <button type="button" class="btn btn-warning" onclick="exibeForm(${indice})">Atualizar</button>  
    <button type="button" class="btn btn-danger" onclick="excluirCadastro(${indice})">Excluir</button>
`
} 