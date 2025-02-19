This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Descrição

### Frontend - Teste técnico Warlocks Tech

##

### Existem 2 versões deste projeto.

Nota:

Este é o guia para rodar o projeto local. Caso queira rodar ele com docker local, vá para a branch [PROD/DOCKER]()

prod/local <- você está aqui

prod/docker

## Informações importantes

Istruções para rodar o Frontend do projeto Warlocks Tech

Tecnologias

Frontend:
Next.js (v15), React,

TypeScript

Autenticação: JWT (via backend)

Zustand: Para grenciamento de estados

React-Toastify: Para emissão de avisos para o usuário

## Pré-requisitos

### Antes de começar, você precisa ter os seguintes softwares instalados na sua máquina:

[Node.js](https://nodejs.org/pt/download) (v18 ou superior)

## Instalação Local

Clone o repositório:

```bash
git clone https://github.com/Hagave/Warlock-Tech-FE/tree/prod/local
```

Certifique que esteja na pasta frontend

```bash
cd frontend/
```

Instale as dependências:

```bash
npm install
```

Build o projeto

```bash
npm run build
```

Rodar a aplicação (modo produção):

```bash
npm run start
```

A aplicação ficará disponível em http://localhost:3001, e você poderá fazer alterações no código que serão refletidas automaticamente.

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
