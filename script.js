document.getElementById('cadastroCliente').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const clientName = document.getElementById('name').value;
    const clientCpf = document.getElementById('cpf').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${clientName}</td><td>${clientCpf}</td>`;

    document.querySelector('#clientTable tbody').appendChild(newRow);

    document.getElementById('cadastroCliente').reset();
});