-- Excluir todas as tabelas se existirem, em ordem segura
DROP TABLE IF EXISTS
    Divida,
    Reserva,
    Livro_tem_Categoria,
    Categoria_tem_subcategoria,
    Subcategoria,
    Categoria,
    Editora_publica_livro,
    Editora,
    Autor_escreve_livro,
    Livro,
    Autores,
    Locatario,
    Curso
CASCADE;

-- Criação do banco de dados (executar separadamente no PostgreSQL)
-- CREATE DATABASE Biblioteca;

-- Tabela Cursos
CREATE TABLE Curso (
    id_curso SERIAL PRIMARY KEY,
    Nome_curso VARCHAR(255) NOT NULL
);

-- Tabela Locatários
CREATE TABLE Locatario (
    id_locatario SERIAL PRIMARY KEY,
    RA VARCHAR(20) UNIQUE,
    Tipo VARCHAR(50),
    Nome_locatario VARCHAR(255) NOT NULL,
    Curso INT,
    Data_nascimento DATE,
    Email VARCHAR(255) UNIQUE,
    Telefone VARCHAR(20),
    Login VARCHAR(50) UNIQUE,
    Senha VARCHAR(255),
    Livro_imagem BYTEA,
    FOREIGN KEY (Curso) REFERENCES Curso(id_curso) ON DELETE SET NULL
);

-- Tabela Autores
CREATE TABLE Autores (
    id_autor SERIAL PRIMARY KEY,
    Nome_autor VARCHAR(255) NOT NULL
);

-- Tabela Livros
CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Qtd_disponivel INT NOT NULL,
    Edicao VARCHAR(50),
    ISBN VARCHAR(20) UNIQUE,
    Ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Relação Autores e Livros
CREATE TABLE Autor_escreve_livro (
    id_livro_escrito SERIAL PRIMARY KEY,
    id_autor INT,
    id_livro INT,
    FOREIGN KEY (id_autor) REFERENCES Autores(id_autor) ON DELETE CASCADE,
    FOREIGN KEY (id_livro) REFERENCES Livro(id_livro) ON DELETE CASCADE
);

-- Tabela Editoras
CREATE TABLE Editora (
    id_editora SERIAL PRIMARY KEY,
    Nome_editora VARCHAR(255) NOT NULL
);

-- Tabela Relação de Editoras e Livros
CREATE TABLE Editora_publica_livro (
    id_editora_livro SERIAL PRIMARY KEY,
    id_livro INT,
    id_editora INT,
    FOREIGN KEY (id_livro) REFERENCES Livro(id_livro) ON DELETE CASCADE,
    FOREIGN KEY (id_editora) REFERENCES Editora(id_editora) ON DELETE CASCADE
);

-- Tabela Categorias
CREATE TABLE Categoria (
    id_categoria SERIAL PRIMARY KEY,
    Nome_categoria VARCHAR(255) NOT NULL
);

-- Tabela Subcategorias
CREATE TABLE Subcategoria (
    id_subcategoria SERIAL PRIMARY KEY,
    Nome_subcategoria VARCHAR(255) NOT NULL
);

-- Relação Categorias e Subcategorias
CREATE TABLE Categoria_tem_subcategoria (
    id_categoria_subcategoria SERIAL PRIMARY KEY,
    id_categoria INT,
    id_subcategoria INT,
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria) ON DELETE CASCADE,
    FOREIGN KEY (id_subcategoria) REFERENCES Subcategoria(id_subcategoria) ON DELETE CASCADE
);

-- Relação Livros e Categorias
CREATE TABLE Livro_tem_Categoria (
    id_livro_categoria SERIAL PRIMARY KEY,
    id_livro INT,
    id_categoria INT,
    FOREIGN KEY (id_livro) REFERENCES Livro(id_livro) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria) ON DELETE CASCADE
);

-- Tabela Reservas
CREATE TABLE Reserva (
    id_livro INT,
    id_locatario INT,
    Data_reserva DATE,
    Data_retorno DATE,
    Data_entrega DATE,
    
    PRIMARY KEY (id_livro, id_locatario, Data_reserva),
    FOREIGN KEY (id_livro) REFERENCES Livro(id_livro) ON DELETE CASCADE,
    FOREIGN KEY (id_locatario) REFERENCES Locatario(id_locatario) ON DELETE CASCADE
);

-- Tabela Dívidas
CREATE TABLE Divida (
    id_divida SERIAL PRIMARY KEY,
    id_locatario INT,
    id_livro INT,
    Data_reserva DATE,
    Estado VARCHAR(50),
    Valor DECIMAL(10,2),
    Data_divida DATE,
    FOREIGN KEY (id_locatario) REFERENCES Locatario(id_locatario) ON DELETE CASCADE,
    FOREIGN KEY (id_livro, id_locatario, Data_reserva) REFERENCES Reserva(id_livro, id_locatario, Data_reserva) ON DELETE CASCADE
);
