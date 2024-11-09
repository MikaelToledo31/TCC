document.getElementById('cadastroCliente').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const clientName = document.getElementById('name').value;
    const clientCpf = document.getElementById('cpf').value;

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${clientName}</td><td>${clientCpf}</td>`;

    // Adiciona a nova linha ao corpo da tabela
    document.querySelector('#clientTable tbody').appendChild(newRow);

    // Limpa os campos do formulário
    document.getElementById('cadastroCliente').reset();
});