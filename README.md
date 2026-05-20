# SkillMatch JS

## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre uma candidata e vagas de front-end júnior. O sistema compara as habilidades da Nathalia com os requisitos de cada vaga e mostra:

- percentual de compatibilidade
- habilidades encontradas
- habilidades faltantes
- vaga mais compatível
- recomendação de estudo

## Objetivo

Praticar os principais conceitos do Módulo 01:

- lógica de programação
- JavaScript
- tipos de dados
- condicionais e operadores
- laços de repetição
- funções e arrow functions
- arrays e métodos de array
- objetos
- classes, herança e this
- callbacks, closures
- Promises e async/await
- GitHub e Kanban

## Como executar

Este projeto roda com Node.js terminal, dentro da pasta do projeto:

```bash
node skillmatch.js
```

Ou sem Node.js:
1. Abrir o Google Chrome
2. Pressionar `F12` ou `Ctrl + Shift + J`
3. Abrir a aba Console
4. Copiar o código do arquivo `skillmatch.js`
5. Colar no console e pressionar Enter

## Estrutura do projeto

```
skillmatch-js/
├── skillmatch.js
└── README.md
```

## Tecnologias e conceitos usados

- JavaScript puro
- Node.js para execução local
- Métodos de array: `filter`, `map`, `flatMap`, `every`, `for...of`
- Classes e herança (`Vaga` e `VagaFrontEnd`)
- Closure (contador de análises)
- Callback (mensagem final)
- Promise + async/await (simulação de busca de vagas)

## Como a internet funciona (resumo)

A internet funciona como uma conversa entre dois lados: o **cliente** (seu navegador ou app) e o **servidor** (o computador que guarda os dados). O cliente faz um pedido, o servidor responde. No projeto, simulamos isso com uma Promise que "finge" buscar as vagas de um servidor, usando `setTimeout` pra imitar o tempo de espera de uma requisição real.

## var, let e const

- `var` — forma antiga de declarar variáveis. Tem escopo de função e pode causar bugs por ser acessada fora do bloco onde foi criada. Evitamos usar.
- `let` — usada quando o valor precisa mudar (ex: `melhorVaga` e `maiorCompatibilidade`).
- `const` — usada quando o valor não muda.

## Extensões usadas no VS Code

- **Prettier** — formata o código deixando ele organizado e padronizado
- **Code Runner** — executa arquivos JavaScript (e outras linguagens) direto no VS Code
- **Dracula Theme Official** — tema visual escuro para o editor
```
