const exibeTabela = indice => {

    document.getElementById('idAreaSecundaria').innerHTML = ""

    document.getElementById('idAreaPrincipal').innerHTML = `
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Observações</th>
            <th scope="col">Setor</th>
            <th scope="col">Supervisor</th>
            </tr>
        </thead>
        <tbody> ` + cadastro.map ( (e,i) => 
        
        `   <tr>
            <th>${i}</th>
            <td onclick="exibeDado(${i})">${e.nome}</td>
            <td>${e.email}</td>
            <td>${e.obs}</td>
            <td>${e.setor}</td>
            <td>${e.supervisor}</td>
            </tr>
           `).join('') + `
        </tbody>
    </table>
    `
    
}

