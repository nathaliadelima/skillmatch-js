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

vagas.forEach((vaga) => {

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
    console.log('Para a vaga da ' + vaga.empresa + ', o candidato atende todos os requisitos!')
  } else {
    console.log("Para a vaga da " + vaga.empresa + ", faltam:"); 
    habilidadesFaltantes.forEach((habilidade) => {
      console.log("- " + habilidade);
    });
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
});
