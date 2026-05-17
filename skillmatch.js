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
    requisitos: ['JavaScript', 'Kamban', 'GitHub'],
    salario: 1800,
    modalidade: 'Presencial',
},
{
    id: 3,
    empresa: 'WebSolutions',
    cargo: 'Programador JavaScript Júnior',
    requisitos: ['JavaScript', 'Arrays', 'Objetos', 'Funções'],
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

vagas.forEach((vaga) => { // percorre a lista de vagas, a cada volta "vaga" representa uma vaga diferente, são 3
  const habilidadesEncontradas = vaga.requisitos.filter((requisitos) => // cria uma lista filtrando os requisitos daquela vaga específica, "requisitos" é o apelido de cada item na vez
  candidato.habilidades.includes(requisitos), // condição do filter: verifica se as habilidades do candidato incluem aquele requisito — se sim, mantém; se não, descarta
  );

  console.log(habilidadesEncontradas);
});

