# Sistema de Autenticação de Usuário com Next.js

Este projeto é um exemplo de sistema de autenticação de usuário utilizando Next.js, Shadcn/ui, Tailwind CSS, React Hook Form e Zod.

## Funcionalidades

- Formulário de login de usuário.
- Armazenamento de dados do usuário no navegador (localStorage).
- Geração de token de autenticação para o usuário logado.
- Aba de alteração de usuários.
- Deslogar.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Shadcn/ui](https://shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## Pré-requisitos

- Node.js instalado na máquina (versão 14.x ou superior).
- NPM (gerenciador de pacotes do Node.js) ou Yarn.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Gabrielcafens/login-localstorage-shadcnUI-next.git
   cd login-localstorage-shadcnUI-next
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   TEST_USER_EMAIL=user@example.com
   TEST_USER_PASSWORD=123456
   ```

## Como Rodar

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `components/`: Contém os componentes reutilizáveis da aplicação.
- `components/LoginForm.tsx`: Formulário de login do usuário.
- `pages/`: Contém as páginas da aplicação.
- `pages/index.tsx`: Página inicial que exibe o formulário de login.
- `pages/profile.tsx`: Página de perfil do usuário logado.

## Código de Exemplo

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TEST_USER_EMAIL: process.env.TEST_USER_EMAIL,
    TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD,
  },
};

module.exports = nextConfig;
```

### `.env`

```env
TEST_USER_EMAIL=user@example.com
TEST_USER_PASSWORD=123456
```
## Observações

- Este projeto está em constante desenvolvimento e novas funcionalidades serão adicionadas futuramente.

```                         ___

                          ___
                      .-'   `'.
                     /         \
                     |         ;
                     |         |           ___.--,
            _.._     |0) = (0) |    _.---'`__.-( (_.
     __.--'`_.. '.__.\    '--. \_.-' ,.--'`     `""`
    ( ,.--'`   ',__ /./;   ;, '.__.'`    __
    _`) )  .---.__.' / |   |\   \__..--""  """--.,_
   `---' .'.''-._.-'`_./  /\ '.  \ _.--''````'''--._`-.__.'
         | |  .' _.-' |  |  \  \  '.               `----`
          \ \/ .'     \  \   '. '-._)
           \/ /        \  \    `=.__`'-.
           / /\         `) )    / / `"".`\
     , _.-'.'\ \        / /    ( (     / /
      `--'`   ) )    .-'.'      '.'.  | (
             (/`    ( (`          ) )  '-;    
            
  ( (                ( (                 ( (                
   ) )                ) )                 ) )               
.........           .........         .........           
|       |]         |       |]         |       |]                
\       /           \       /         \       /              
 `-----'             `-----'           `-----'  