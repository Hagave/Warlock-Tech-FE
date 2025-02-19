## Descrição

### Frontend - Teste técnico Warlocks Tech

##

### Existem 2 versões deste projeto.

Nota:

Este é o guia para rodar o projeto com docker. Caso queira rodar ele local, vá para a branch [PROD/LOCAL](https://github.com/Hagave/Warlock-Tech-FE/tree/prod/local)

[prod/ local](https://github.com/Hagave/Warlock-Tech-FE/tree/prod/local)

[prod/docker ]() <- você está aqui

## Informações importantes

#### Certifique-se que o backend esteja rodando e as migrações do prisma tenham sido feitas. Existe um readme detalhando como fazer. Caso contrário, você encontrará um erro 500(server-side) ao tentar criar uma conta e acessar o sistema.

Instruções para rodar o Frontend do projeto Warlocks Tech

Tecnologias:

Next.js (v15),

TypeScript,

Autenticação: JWT (via backend),

Zustand: Para grenciamento de estados,

React-Toastify: Para emissão de avisos para o usuário

Docker:Para criação do container

Docker-Compose: Para gerenciamento do container

## Pré-requisitos

### Antes de começar, você precisa ter os seguintes softwares instalados na sua máquina:

[Node.js](https://nodejs.org/pt/download) (v18 ou superior)

## Como rodar a aplicação.

Clone o repositório:

```bash
git clone https://github.com/Hagave/Warlock-Tech-FE/tree/prod/docker
```

Certifique que esteja na pasta frontend

```bash
cd frontend/
```

Instale as dependências:

```bash
docker-compose up --build -d
```

A aplicação ficará disponível em http://localhost:3001.

## Observações

O projeto trabalha com autenticação de token. Caso você tenha algum token em seus cokies, limpe ele antes de acessar a aplicação.

## Desenvolvimento

#### Front-end (React / Next.js)

[x] Página de Login/Registro

[x] Permitir que novos usuários se registrem (informando e-mail e senha,
por exemplo).
[x] Fluxo de login com token.

#### Página de Listagem de Notas

[x] Mostrar todas as notas do usuário autenticado (título e descrição, por
exemplo).
[x] Botão para criar nova nota.

#### Criação/Edição de Notas

[x] Formulário simples (título e descrição).

[x] Validação mínima (não aceitar título vazio).

#### Exclusão de Notas

[x] Permitir excluir uma nota existente.

#### Layout Simples

Não é necessário um design complexo, mas deve ser claro e
funcional.

Pode usar bibliotecas de UI como Material UI, Bootstrap, etc.

## Meus contatos

- Héverton Vinícius - [Linkedin](https://www.linkedin.com/in/heverton-vinicius/)
- Email - [hagavepro@gmail.com]()
