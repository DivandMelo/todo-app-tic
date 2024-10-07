My Task

Este é o repositório do aplicativo My Task, uma lista de tarefas desenvolvida em React Native utilizando Formik e Yup para validação de formulários. O objetivo deste projeto é aplicar as técnicas de validação de dados de formulário, exibindo mensagens de erro personalizadas e garantindo que os dados inseridos atendam aos critérios especificados.

Funcionalidades

    Criar e editar tarefas
    Exibir uma lista de tarefas pendentes e concluídas
    Validação de formulários de adição de tarefas (nome da tarefa obrigatório)
    Notificações de erro personalizadas
    Interface intuitiva e fácil de usar

Tecnologias Utilizadas

    React Native (Expo)
    Formik para gerenciamento de formulários
    Yup para validação de dados
    JavaScript/TypeScript
    Expo CLI para desenvolvimento e execução

Requisitos de Sistema

    Node.js (versão 14 ou superior)
    Expo CLI (instalado globalmente)
    Emulador Android/iOS ou dispositivo físico conectado

Instruções de Instalação
Passos para configurar o ambiente:

    Clone o repositório:

    bash

git clone https://github.com/seuusuario/task-manager-app.git (Alterar)

Acesse o diretório do projeto:

bash

cd my-task-app ( Alterar)

Instale as dependências do projeto:

bash

npm install

Execute o aplicativo no Expo:

bash

    expo start

    Escaneie o QR Code com o Expo Go app (disponível na Google Play e Apple Store) ou escolha uma opção para rodar no simulador (iOS ou Android).

Validação de Formulários

A validação de formulários é feita com as seguintes bibliotecas:

    Formik: Para controle de estado e manipulação de formulários.
    Yup: Para definir e aplicar as regras de validação dos campos.

Exemplo de Validação:

No campo "Nome da Tarefa", validamos a entrada do usuário para garantir que o campo não esteja vazio.

javascript

import * as Yup from 'yup';

const TaskSchema = Yup.object().shape({
  taskName: Yup.string()
    .required('O nome da tarefa é obrigatório'),
});

As mensagens de erro são exibidas diretamente no formulário se os critérios não forem atendidos.
Protótipo

O design e interface foram projetados para ser minimalistas e funcionais, com foco na experiência do usuário.
Link para o protótipo final
Como Contribuir

    Faça um fork do projeto.

    Crie uma nova branch:

    bash

git checkout -b feature/minha-feature

Faça as alterações necessárias.

Envie suas alterações:

bash

    git add .
    git commit -m "Descrição das alterações"
    git push origin feature/minha-feature

    Abra um Pull Request.

Autor

Este projeto foi desenvolvido como parte da Residência em Software TIC36 - Desenvolvimento de Software e Empreendedorismo.
Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.