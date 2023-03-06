[Figma](https://www.figma.com/file/rEhBpnPmU00Qi1VwXL3Xa2/GitHub-Blog-(Community)?node-id=0%3A1&t=5rxGNBkbt7qzdrEc-1)

# Practice

- [ ] API fetching with axios. With sorting, filtering, and pagination
- [ ] Accessibility with styled-components + radixUI
- [ ] Routing with React Router DOM
- [ ] Forms with React Hook Form + Zod
- [ ] React dev tools
	- Settings -> Highlight updates when components render
	- Settings -> Profile -> Record why each...
	- Components é pra ver uma DOM de componente, os states, etc
	- Profiler pra ver o tempo que cada componente demora pra renderizar

# Starting

- [X] Start typescript react app with vite
- [X] Install dependencies
- [X] Clear unused files and codes
- [X] Setup eslint
	- [X] Install dependencies: eslint, @rockeseat/eslint-config
	- [X] Create .eslintrc
	- [X] Add scripts
	    - "lint": "eslint --ext .ts,.tsx src",
    	- "lint:fix": "eslint --ext .ts,.tsx src --fix"

# UI

- [X] Setup styling
	- [X] Add styled-components @types/styled-components
	- [X] Type themes (styled.d.ts)
	- [X] Insert theme provider
	- [X] Create themes (as const)
	- [X] Create global style
- [X] Install fonts from google, and adjust global style font-family
- [X] Copy all assets from Figma
	- [X] colors
	- [X] icons
	- [-] images
	- [X] components
- [ ] Create pages UI

# Features

- [ ] Understand GitHub APIs
	- [ ] [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user)
	- [ ] [GitHub Search API:](https://docs.github.com/pt/rest/search)
	- [ ] [GitHub Issues API:](https://docs.github.com/pt/rest/issues/issues#get-an-issue)
- [ ] Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- [ ] Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- [ ] Criar uma página para exibir um post (issue) completo. Usar rotas dinâmicas e [react-markdown](https://github.com/remarkjs/react-markdown)
