# MoviesLib

Um site para buscar e exibir informações de filmes, consumindo a API do [TheMovieDB](https://www.themoviedb.org/documentation/api).

---

## Funcionalidades

- Busca de filmes por nome
- Página detalhada com informações do filme (orçamento, receita, duração, descrição)
- Exibição dos filmes mais bem avaliados
- Layout inspirado no IMDb

---

## Tecnologias

- React
- Vite
- React Router DOM
- React Icons
- CSS puro
- API TheMovieDB

---

## Demonstração do projeto

Clique na imagem para ver o vídeo no YouTube:

[![Demo do Reactmdb]](https://www.youtube.com/watch?v=f2IMTWNchZ4)

---

## Configuração do projeto

### 1. Clone o repositório

```bash
git clone https://github.com/joaogllm/reactmdb.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo .env na raiz do projeto com as variáveis:

```bash
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_API_KEY=api_key=SUA_API_KEY_AQUI
VITE_IMG=https://image.tmdb.org/t/p/w500
Importante: Substitua SUA_API_KEY_AQUI pela sua chave de API do TheMovieDB.
Mantenha este arquivo em segredo e não o envie para o GitHub.
```

### 4. Rode o projeto localmente

```bash
npm run dev
O site estará disponível em http://localhost:5173 (ou a porta que o Vite informar).
```
