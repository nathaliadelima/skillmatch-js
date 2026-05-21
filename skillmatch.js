const candidato = {
    nome: 'Nathalia',
    area: 'Front-end',
    habilidades: ['JavaScript', 'Notion', 'Landing Pages', 'Lógica de programação', 'GitHub'],
    experienciaMeses: 3,
}

const vagas = [
{
    id: 1,
    empresa: 'TechStart',
    cargo: 'Desenvolvedor Front-end Júnior',
    requisitos: ['JavaScript', 'GitHub', 'Lógica de programação'],
    salario: 2800,
    modalidade: 'Remoto',
},
{
    id: 2,
    empresa: 'CodeLab',
    cargo: 'Estágio Front-end',
    requisitos: ['JavaScript', 'Kanban', 'GitHub'],
    salario: 1800,
    modalidade: 'Presencial',
},
{
    id: 3,
    empresa: 'WebSolutions',
    cargo: 'Programador JavaScript Júnior',
    requisitos: ['Arrays', 'Objetos', 'Funções'],
    salario: 3000,
    modalidade: 'Presencial',
},
]

/*
compatibilidade = quantidade de requisitos do candidato que correspondem aos requisitos da vaga / quantidade total de requisitos da vaga * 100

exemplo de resultado esperado no console:

empresa = ______
cargo = ______
compatibilidade = __%
habilidades encontradas
habilidades faltantes = ______
classificação = baixa/média/alta compatibilidade
*/

function buscarVagasSimuladas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vagas)
        }, 3000)
    })
}

async function iniciarSistema() {

    console.log('Aguarde... buscando vagas no sistema!')
    console.log('')

    const vagasCarregadas = await buscarVagasSimuladas()

    console.log("Vagas carregadas com sucesso!")
    console.log('')

const todasTemSalario = vagasCarregadas.every(vaga => vaga.salario > 0)
console.log('Todas as vagas possuem salário definido? ' + (todasTemSalario ? 'Sim' : 'Não'))
console.log('')

function criarContadorDeAnalises() {
    let total = 0

    return function () {
        total++
        return total
    }
}

const contar = criarContadorDeAnalises()

 let melhorVaga = '' // vai guardar a vaga mais compatível
 let maiorCompatibilidade = 0  // vai guardar a maior % encontrada até agora

vagasCarregadas.forEach((vaga) => {
  const analise = contar();
  console.log(`Analisando vaga ${analise} de ${vagasCarregadas.length}...`);

  console.log("Empresa: " + vaga.empresa);
  console.log("Cargo: " + vaga.cargo);

  // percorre a lista de vagas, a cada volta "vaga" representa uma vaga diferente, são 3
  const habilidadesEncontradas = vaga.requisitos.filter(
    (
      requisitos, // cria uma lista filtrando os requisitos daquela vaga específica, "requisitos" é o apelido de cada item na vez
    ) => candidato.habilidades.includes(requisitos), // condição do filter: verifica se as habilidades do candidato incluem aquele requisito — se sim, mantém; se não, descarta
  );
  if (habilidadesEncontradas.length === 0) {
    console.log("Habilidades encontradas: Nenhuma");
  } else {
    console.log(
      "Habilidades encontradas: " + habilidadesEncontradas.join(", "),
    );
  }

  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !candidato.habilidades.includes(requisito),
  );
  if (habilidadesFaltantes.length === 0) {
    console.log(
      "Para a vaga da " +
        vaga.empresa +
        ", o candidato atende todos os requisitos!",
    );
  } else {
    console.log("Para a vaga da " + vaga.empresa + ", faltam:");
    for (const habilidade of habilidadesFaltantes) {
      console.log("- " + habilidade);
    }
  }

  const compatibilidade =
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100;
  console.log("Compatibilidade: " + compatibilidade.toFixed(0) + "%");
  if (compatibilidade <= 49) {
    console.log("Classificação: Baixa compatibilidade");
  } else if (compatibilidade >= 50 && compatibilidade <= 79) {
    console.log("Classificação: Média compatibilidade");
  } else {
    console.log("Classificação: Alta compatibilidade");
  }

  console.log("");

  if (compatibilidade > maiorCompatibilidade) {
    maiorCompatibilidade = compatibilidade;
    melhorVaga = vaga;
  }
});

console.log('Vaga mais compatível:')
console.log(melhorVaga.empresa + ' - ' + melhorVaga.cargo)
console.log('Compatibilidade: ' + maiorCompatibilidade.toFixed(0) + '%')

// percorre todas as vagas e coleta os requisitos que a Nathalia ainda não tem, juntando tudo numa lista só
const todasFaltantes = vagas.flatMap(vaga =>
    vaga.requisitos.filter(requisito => 
        !candidato.habilidades.includes(requisito) // se a habilidade NÃO está no perfil, entra na lista
    )
)

// pega todos os itens da lista MENOS o último
const semUltimo = todasFaltantes.slice(0, -1).join(', ')

// pega só o último item da lista
const ultimo = todasFaltantes[todasFaltantes.length - 1]

// junta tudo: os primeiros separados por vírgula + "e" + o último
const listaFormatada = semUltimo + ' e ' + ultimo

console.log("");
// exibe a recomendação de estudo com todas as habilidades faltantes formatadas
console.log('Recomendação de estudo: Priorize estudar ' + listaFormatada + ', pois esses conteúdos aparecem nas vagas analisadas.');

console.log("");

class Vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade) {
        this.empresa = empresa
        this.cargo = cargo
        this.requisitos = requisitos
        this.salario = salario
        this.modalidade = modalidade
    }

    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`
    }
}

const vaga1 = new Vaga('TechStart', 'Desenvolvedor Front-end Júnior', ['JavaScript', 'GitHub', 'Lógica de programação'], 2800, 'Remoto');
const vaga2 = new Vaga('CodeLab', 'Estágio Front-end', ['JavaScript', 'Kanban', 'GitHub'], 1800, 'Presencial');
const vaga3 = new Vaga('WebSolutions', 'Programador JavaScript Júnior', ['Arrays', 'Objetos', 'Funções'], 3000, 'Presencial');

console.log('Resumo das vagas analisadas:')
;[vaga1, vaga2, vaga3].map(v => console.log('- ' + v.exibirResumo()))

console.log("");  

class VagaFrontEnd extends Vaga {

    constructor(vaga, nivel) {
        super(vaga.empresa, vaga.cargo, vaga.requisitos, vaga.salario, vaga.modalidade);
        this.nivel = nivel
    }

    exibirNivel() {
        return this.nivel
    
    }
}

const vagaFront = new VagaFrontEnd(vaga1, 'Júnior');

console.log('Vaga em destaque: ' + vagaFront.exibirResumo())
console.log('Nível: ' + vagaFront.exibirNivel())

console.log ('');

 
function finalizarAnalise(nomeCandidato, callback) { 
  callback(nomeCandidato); 
  console.log('');
  console.log("Análise finalizada."); 
} 
 
function exibirMensagemFinal(nome) { 
  console.log(`${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`); 
} 

finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

iniciarSistema()

