
# curso-frontend
####  EBAC

# GIT

## Conceitos de versionamento
- Historico
- Controle de versão
- Quem alterou
- o que alterou
- todos os arquivos
- Evolução
 

## Criar conta no GitHub

## Clonar o projeto
git clone https://github.com/ConinoGDS/curso-frontend.git

## Commits
Informações de alteração
- após testado todo seu codigo
- git add *
- git commit -am "mesagem"
- git push ( envia alterações para o repositorio PS: só consegue fazer o push se o s  eu codigo estiver atualizado)  
  - Exemplo de push  ( $ git push https://github.com/ConinoGDS/curso-frontend.git   )

- git pull ( puxar /trazer alterações do GitHub para sua maquina )

## Git flow
Fluxo do Git

## Branchs
São ramificações do codigo.

- main / master
- developer
- DOD  Definition of done   ( Definição de concluido )  ( Criterio de aceite)
- versionamento 0.1.10

-- Para criar um BRANCH

git checkout -b dev ( cria uma brench )
git checkout master ( mudar de branch ) 


## Merge
Mescla de branch

git nerge main 

### Pull Requests
Mescla de branchs  no repositorio
permite code review
O repositorio reolve os conflitos automatios


### configurar o Git Flow 

git flow init
git flow feature start { nome-da-feature }
