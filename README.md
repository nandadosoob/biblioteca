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
npm install
```

3. Crie um arquivo `.env` na pasta `backend/` com o seguinte conteúdo:

```
EMAIL_ADDRESS=seuemail@gmail.com
EMAIL_PASS=suaSenhaDeAppDoGmail
```

4. Execute o servidor:
```bash
node app.js
```

> API disponível na porta: `http://localhost:3000`

---

### Frontend (React + Vite)

1. Acesse a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Acesse a pasta vite-project:
```bash
cd vite-project
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
-  **CRUD de usuários** (aluno e professor), com desabilitação ao invés de exclusão
-  **Autenticação de colaboradores** da biblioteca para acesso às funcionalidades restritas
-  **Empréstimos com controle de regras:**
  - Alunos: até 3 livros por 14 dias
  - Professores: até 5 livros por 30 dias
  - Multa de R$1,00 por dia de atraso
  - Bloqueio de empréstimo se houver pendência
-  Controle de **quantidade de exemplares**
-  **Envio de e-mail** ao usuário quando um livro é emprestado ou devolvido
-  **Histórico de empréstimos e devoluções por usuário**
-  Design **responsivo** para desktop e mobile

---

## 📬 Exemplo de uso da API

- `GET /livros` → retorna todos os livros cadastrados  
- `POST /locatarios` → cadastra um novo locatário e envia e-mail de confirmação  
- `PUT /livros/:id` → edita informações de um livro específico  
- `POST /emprestimos` → realiza um novo empréstimo (colaborador autenticado)

---

## Autores e Responsabilidades

| Nome               | Responsabilidades                                  |
|--------------------|----------------------------------------------------|
| **Denise Cardoso** | Frontend, documentação e apoio no backend          |
| **Fernanda Rocha** | Backend, frontend e testes                         |
| **Beatriz Oliveira** | Backend, frontend ,testes e organização trello                  |

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- React + Vite
- Nodemailer (Gmail API)
- GitHub & Trello (Scrum)

---

## Observações Finais

- O sistema foi desenvolvido aplicando as **heurísticas de usabilidade de Nielsen**
- A pesquisa de livros é **pública** (não exige login)
- O restante do sistema exige **autenticação dos colaboradores**
- Integração com **serviços externos** como o Gmail foi implementada para envio automático de notificações
