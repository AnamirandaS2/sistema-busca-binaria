// Array de vendedores ordenado
const vendedores = ['Ana', 'João', 'Maria', 'Pedro', 'Gabriel'];

vendedores.sort()

// Array de clientes para cada vendedor
const clientes = [
  ['Cliente J', 'Cliente K', 'Cliente L'],
  ['Cliente A', 'Cliente B', 'Cliente C'],
  ['Cliente D', 'Cliente E'],
  ['Cliente F', 'Cliente G', 'Cliente H', 'Cliente I'],
  ['Cliente M', 'Cliente N']
];

// Função de busca binária para encontrar o índice do vendedor no array
function buscarVendedor(vendedores, nome) {
  let inicio = 0;
  let fim = vendedores.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (vendedores[meio] === nome) {
      return meio;
    } else if (vendedores[meio] < nome) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

// Função para imprimir a lista de clientes de um vendedor
function imprimirClientes(nomeVendedor) {
  const indice = buscarVendedor(vendedores, nomeVendedor);

  if (indice !== -1) {
    const vendedor = vendedores[indice];
    const clientesVendedor = clientes[indice];
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Clientes de ${vendedor}:</h2>`;
    for (const cliente of clientesVendedor) {
      resultadoDiv.innerHTML += `<p>${cliente}</p>`;
    }
  } else {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Vendedor ${nomeVendedor} não encontrado.</p>`;
  }
}

// Função para manipular o evento de clique no botão Buscar
function buscarClick() {
  const nomeVendedor = document.getElementById('nomeVendedor').value;
  imprimirClientes(nomeVendedor);
}

// Adiciona o evento de clique ao botão Buscar
document.getElementById('btnBuscar').addEventListener('click', buscarClick);

// Função para encontrar o vendedor do cliente
function encontrar_vendedor(nomeCliente){
    
    if(indice == -1){
        const vendedor = vendedores[indice];
        const clientesVendedor = clientes[indice];
        const indice = vendedores.indexOf  (buscarVendedor)
        getElementById('resultadoC');
        resultadoDiv.innerHTML = `<h2>Vendedor do ${clientes}:</h2>`;
        for (const cliente of clientesVendedor) {
      resultadoDiv.innerHTML += `<p>${vendedor}</p>`;
        console.log(`O Vendedor do cliente ${cliente} não foi encontrado`);} 
} else {console.log(`O cliente ${cliente} foi atendido por ${indice}`)}  
}
// Função para manipular o evento de clique no botão Buscar
function buscarClick1() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    encontrar_vendedor(nomeCliente);
  }
  
  // Adiciona o evento de clique ao botão Buscar
  document.getElementById('btnBuscarC').addEventListener('click', buscarClick1);