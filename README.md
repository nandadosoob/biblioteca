#Bem vindo ao projeto da livraria desenvolvida no ensino médio
Esse é um projeto que foi proposto para consolidar os conhecimentos obtidos no decorrer do curso.


# Título e descrição do projeto

Sistema web desenvolvido para gerenciar os empréstimos de livros da biblioteca da UTFPR. Criado com Node.js, React e PostgreSQL, o projeto permite controle completo de usuários, livros, histórico de empréstimos e envio de notificações por e-mail.

---

## Objetivo do Projeto

Aprender os recursos básicos da ferramenta Node.js para a criação de aplicações web com foco em usabilidade, autenticação, e integração com banco de dados e serviços externos.

---

## Instruções de Instalação e Execução

### Pré-requisitos:
- Node.js v18+
- PostgreSQL
- Git

---

### Backend (Node.js + Express)

1. Acesse a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm init
npm install express
npm install -g nodemon
```

3. Execute o servidor:
```bash
node app.js
```

> API disponível na porta: `http://localhost:3000`
> utilizamos a ferramenta hoppscotch para testar as rotas

---

### Frontend (React + Vite)

1. Acesse a pasta do frontend:
```bash
cd frontend
```

2. Acesse a pasta vite-project:
```bash
cd vite-project
```
3. Instale as dependências:
```bash
npm install 
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

> Frontend disponível em: `http://localhost:5173`

---

## Estrutura do Projeto

```
biblioteca/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Lógica das rotas e requisições
│   │   ├── models/            # Consultas SQL e conexões com o banco
│   │   ├── utils/             # Funções auxiliares (ex: envio de e-mails)
│   │   └── routes.js          # Mapeamento de rotas da API
│   ├── app.js                 # Arquivo principal do backend
│   └── .env                   # Variáveis de ambiente
│
├── database                   
│   ├── livraria.sql           #sql do banco de dados usando o postgres
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Componentes visuais reutilizáveis
│   │   ├── pages/             # Páginas principais do sistema
│   │   └── App.jsx            # Estrutura base da aplicação
│   └── vite.config.js         # Configurações do Vite
```

---

## Funcionalidades Implementadas

-  **Cadastro, edição, exclusão e consulta de livros**, com imagem de capa
-  **Categorias e subcategorias** (ex: Computação → IA, Engenharia de Software)
-  Marcação de livros como **indisponíveis**, sem deletar do banco
-  **Filtro de busca** por título, autor e categoria
-  **CRUD de usuários** (aluno e professor), com desabilitação ao invés de exclusão (backend)
-  **Empréstimos com controle de regras:**
  - Alunos: até 3 livros por 14 dias
  - Professores: até 5 livros por 30 dias
  - Multa de R$1,00 por dia de atraso
  - Bloqueio de empréstimo se houver pendência
-  Controle de **quantidade de exemplares**
-  **Histórico de empréstimos e devoluções por usuário**
-  Design **responsivo** para desktop e mobile

---

## Exemplo de uso da API

- `GET /livros` → retorna todos os livros cadastrados  
- `POST /locatarios` → cadastra um novo locatário e envia e-mail de confirmação  
- `PUT /livros/:id` → edita informações de um livro específico  
- `POST /emprestimos` → realiza um novo empréstimo (colaborador autenticado)
![alt text](<WhatsApp Image 2025-07-09 at 10.32.45.jpeg>)

---

## Autores e Responsabilidades

| Nome               | Responsabilidades                                  |
|--------------------|----------------------------------------------------|
| **Denise Cardoso** | Frontend, documentação, testes e apoio no backend  |
| **Fernanda Rocha** | Backend, frontend e testes                         |
| **Beatriz Oliveira** | Backend,documentação, frontend e testes          |

---