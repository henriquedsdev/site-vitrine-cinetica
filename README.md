# SITE VITRINE CINÉTICA - TECHIND
## Projeto de treinee Cinética Jr. com site e formulário responsivos de empresa fictícia de tecnologia.

### Sobre:
O projeto consiste em um modelo de site empresarial genérico com formulário de contato e demais informações sobre uma empresa fictícia chamada TECHIND, criado apenas para fins didáticos e de aprendizado e para compor o processo de trainee da empresa júnior Cinética Jr., focada em engenharia e tecnologia. Seu desenvolvimento visa aplicar e aprimorar conhecimentos em desenvolvimento web, explorando conceitos de estruturação, estilização e interatividade de páginas, além de boas práticas de programação.

### Imagens:
<img width="1600" height="620" alt="IMG 1 TECHIND" src="https://github.com/user-attachments/assets/4fe0b8fa-927e-43d2-a231-7feea7eca258" />

<img width="310" height="724" alt="IMG 2 TECHIND" src="https://github.com/user-attachments/assets/85f1fce9-95d8-46bc-ac3e-11d7948445e1" />

<img width="306" height="725" alt="IMG 3 TECHIND" src="https://github.com/user-attachments/assets/15851953-46c8-44e2-92c9-62e1f766c8c3" />

<img width="1600" height="618" alt="IMG 4 TECHIND" src="https://github.com/user-attachments/assets/2ef0be2f-b13a-452a-950f-ae6d7cd40d5c" />

<img width="1600" height="619" alt="IMG 5 TECHIND" src="https://github.com/user-attachments/assets/a9711fb4-44ff-47f3-ada0-dd211d02b2a3" />

<img width="1600" height="618" alt="IMG 6 TECHIND" src="https://github.com/user-attachments/assets/ab43ee23-d823-4797-829d-31210862a991" />

### Detalhes Técnicos / Tecnologias Utilizadas:
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- 🌐 HTML

Utilizado para estruturar as páginas do site, organizando os elementos que compõem a interface, como textos, seções, imagens e formulário de contato.

- 🎨 CSS

Responsável pela estilização e apresentação visual do site, incluindo cores, tipografia, espaçamentos, layouts e adaptação da interface para diferentes tamanhos de tela.

- ⚡ JavaScript

Utilizado para adicionar interatividade ao site e implementar a lógica de integração entre o formulário de contato e o workflow responsável pelo processamento das informações enviadas pelo usuário.

- 🔄 n8n

Plataforma de automação utilizada para desenvolver o workflow de integração com o site. Responsável por receber os dados enviados pelo formulário e executar as etapas definidas para o processamento das informações, conectando o site aos serviços envolvidos na integração.

- 🐳 Docker

Utilizado para executar a aplicação do n8n em ambiente local por meio de containers, facilitando sua configuração, inicialização e gerenciamento, além de proporcionar um ambiente isolado para a execução do workflow de integração.

### 🚀 Como Executar o Projeto localmente:
Para executar o projeto localmente e testar a integração do formulário com o n8n, siga os passos abaixo.

1. Instalação e configuração do Docker

Baixe e instale o Docker Desktop para Windows.

Acesse a BIOS da placa-mãe e habilite a virtualização da CPU (Intel VT-x ou AMD-V, dependendo do processador).

No Windows, pressione Win + R, digite appwiz.cpl e pressione Enter.

Acesse Ativar ou desativar recursos do Windows e habilite os seguintes recursos:

- Subsistema do Windows para Linux (WSL).

- Plataforma de Máquina Virtual (Virtual Machine Platform) - Apenas se for preciso.

Reinicie o computador, caso solicitado, e conclua a configuração do Docker Desktop.

2. Executando o n8n localmente

Com o Docker Desktop instalado e funcionando, abra o CMD do Windows e execute, com o docker aberto, o seguinte comando:

**docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n**

Esse comando cria e executa um container Docker com o n8n, disponibilizando sua interface na porta 5678 e mantendo os dados armazenados em um volume persistente.

Após a inicialização, acesse:

**http://localhost:5678**

Na primeira utilização, será necessário criar uma conta de acesso ao n8n, informando nome, e-mail e senha. Para esse ambiente local de demonstração, não é necessário utilizar um endereço de e-mail real.

3. Configuração do workflow

Após acessar o n8n:

Crie um novo workflow.

Importe o arquivo JSON disponibilizado no repositório GitHub do projeto.

Verifique se os nós e as configurações da integração foram carregados corretamente.

Salve e deixe o workflow ativo ou em modo de teste, conforme a configuração do gatilho utilizado.

4. Executando o site

Baixe os arquivos do projeto disponíveis no repositório GitHub (index.html, styles.css e script.js).

Coloque todos os arquivos na mesma pasta, preservando a estrutura de diretórios utilizada pelo projeto.

Abra a pasta no Visual Studio Code.

Utilize a extensão Live Server para executar o site localmente.

5. Testando a integração

Com o n8n e o site em execução:

Certifique-se de que o workflow esteja pronto para receber as requisições.

Execute ou ative o workflow no n8n, conforme o modo de operação configurado.

Acesse o site pelo endereço disponibilizado pelo Live Server.

Preencha e envie o formulário de contato.

Verifique se as informações foram recebidas e processadas corretamente pelo workflow no n8n.

6. Visualização do site

Caso queira apenas visualizar as páginas e os elementos visuais do projeto, sem testar a integração, existem duas alternativas:

GitHub Pages: acesse a versão publicada do site, caso esteja disponível.

Execução local: abra o arquivo index.html diretamente no navegador ou utilize o Live Server no VS Code.

7. Observação sobre o modo de operação do n8n

O n8n disponibiliza dois modos de execução para Webhooks: Teste (Test) e Produção (Production). Dependendo do modo utilizado no workflow, será necessário ajustar o endereço do Webhook no arquivo script.js.

Localize a seguinte linha no código:

const url = 'http://localhost:5678/webhook-test/form';

Substitua o endereço pelo link correspondente ao modo de operação utilizado:

Modo de teste: utiliza o endereço /webhook-test/ e exige que o workflow esteja aguardando uma execução de teste.

Modo de produção: utiliza o endereço /webhook/ e exige que o workflow esteja ativo.

Certifique-se de que o endereço configurado no JavaScript corresponda ao modo de operação do Webhook no n8n para que a integração funcione corretamente.

### Link do site no GitHub Pages:
https://henriquedsdev.github.io/site-vitrine-cinetica/
