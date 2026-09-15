# Pet Shop Latidos e Miados 🐾

Projeto desenvolvido para a disciplina de **Fundamentos de Sistemas Web**.

## Sobre o Projeto

O projeto consiste no desenvolvimento de uma plataforma web para o **Pet Shop Latidos e Miados**, permitindo a visualização de produtos e serviços, cadastro do cliente e do pet e realização de agendamentos.

Na **Fase 2**, o sistema desenvolvido anteriormente em HTML foi aprimorado utilizando **CSS, Bootstrap e JavaScript**, tornando as páginas mais atrativas, organizadas, responsivas e interativas.

---

## Funcionalidades

### Página Inicial

A página inicial apresenta:

- Menu de navegação;
- Apresentação do Pet Shop;
- Carrossel de imagens utilizando Bootstrap;
- Atalhos para produtos, serviços e agendamento;
- Data e hora atualizadas automaticamente através de JavaScript.

### Produtos

Os produtos estão organizados em três categorias:

- Acessórios;
- Rações não perecíveis;
- Produtos de higiene e limpeza.

Cada produto possui:

- Imagem;
- Nome;
- Descrição;
- Valor.

O sistema apresenta pelo menos dois produtos de cada categoria.

### Serviços

O Pet Shop oferece os seguintes serviços:

- Banho;
- Tosa.

O cliente pode escolher entre:

- Tele-busca;
- Entrega do pet diretamente no estabelecimento.

Os serviços podem ser agendados através da página de cadastro e agendamento.

### Cadastro do Cliente e do Pet

O sistema possui um formulário para cadastro do cliente contendo informações como:

- Nome;
- CPF;
- Endereço;
- Telefone;
- E-mail;
- Sexo.

Também são solicitados dados do pet, como:

- Nome;
- Raça;
- Idade;
- Tipo do pet;
- Informações adicionais.

Foram utilizados diferentes elementos e atributos HTML, incluindo:

- `input`;
- `radio`;
- `checkbox`;
- `number`;
- `email`;
- `tel`;
- `placeholder`;
- `required`.

### Agendamento

O cliente pode selecionar:

- Serviço desejado;
- Forma de atendimento;
- Data;
- Horário.

O campo `datetime-local` é utilizado para selecionar a data e o horário do agendamento.

O JavaScript também impede a seleção de horários anteriores ao momento atual.

### Contato

A página de contato apresenta:

- Telefone;
- E-mail;
- Endereço;
- Horário de atendimento;
- Formulário para envio de mensagem.

O envio é demonstrativo e utiliza JavaScript para apresentar uma confirmação ao usuário.

---

## Acessibilidade

Foram aplicados recursos de acessibilidade, principalmente para auxiliar usuários que utilizam leitores de tela.

Entre os recursos utilizados estão:

- Atributo `alt` nas imagens com descrição do conteúdo;
- Uso de `label` associado aos campos dos formulários;
- Destaque visual ao navegar pelos elementos utilizando o teclado;
- Link para pular diretamente para o conteúdo principal;
- Uso de atributos de acessibilidade nos componentes de navegação.

---

## Tecnologias Utilizadas

- HTML5;
- CSS3;
- Bootstrap 5.1.1;
- JavaScript;
- GitHub;
- GitHub Pages.
