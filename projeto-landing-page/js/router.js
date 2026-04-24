import { loadHabilities } from "./habilitiesLoader.js"
import { inicializarBotoes } from "./habilitiesServices.js"

const navegacao = document.getElementById("navbar");

navegacao.addEventListener('click', (evento) => {
    evento.preventDefault();
    atualizaNavbar();

    const ancoraClicada = evento.target.id;

    switch (ancoraClicada) {
        case "initial__page":
            loadInitialPage();
            break;

        case "about__me":
            loadAboutMePage();
            break;

        case "habilities":
            loadHabilitiesPage();
            break;

        case "contact__page":
            loadContactPage();     
            break;
    
        default:
            console.log(`evento não registrado capturado = ${evento}`)
            break;
    }

    atualizaNavbar(ancoraClicada);
});

function atualizaNavbar(ancoraClicada){
    const paginas = navegacao.querySelectorAll('#initial__page, #about__me, #habilities, #contact__page');

    paginas.forEach((pagina) => {
        pagina.className = pagina.id === ancoraClicada
            ? "navbar--active"
            : "navbar--desactive"
    })

}

function loadInitialPage(){

    const estilo = document.getElementById("page__style");

    document.title = "Página Inicial";
    estilo.href = "/projeto-landing-page/styles/initial-page.css"

    document.getElementById("main").innerHTML = `
        <section id="apresentacao">
            <div class="apresentacao__container">
                <div class="apresentacao__img">
                    <img src="./assets/img/logo.jpg" id="img-logo" alt="Imagem do logo MLP">
                    <h1 class="apresentacao__title">My Landing Page</h1>
                </div>
                <div class="apresentacao__text">    
                    <h3 class="apresentacao__welcome-text">Bem-vindos a My Landing Page!! <br></h3>
                    <p class="apresentacao__initial-text">
                        Essa é uma página de apresentação pessoal, onde você pode conhecer um pouco mais
                        sobre mim! <br>
                        Esse é um projeto criado a fim de demonstrar os conhecimentos que adquiri durante
                        os cursos iniciais presentes na DB1, através da Alura. Fiquem à vontade para navegar
                        e conhecer mais sobre mim, ou qualquer pessoa que queira se apresentar! <br>
                        Vale ressaltar que essa página é um projeto em construção, ou seja, novas mudanças
                        podem ser inseridas.<br>
                    </p>
                </div>    
            </div>
        </section>

        <section id="cards">
            <div class="cards__container">
                <a href="https://github.com/danilo-toriy-db1/projeto-pdi/tree/upstream" 
                class="card__item" id="card-1">
                    <img src="/projeto-landing-page/assets/icons/github-icon.svg" id="card__item--github">
                    <p class="card__item--text">
                        Esse projeto foi desenvolvido usando HTML, CSS e JavaScript.
                        Cada Commit e Pull Request foi registrado no Github pessoal
                        do dev, no caso, do Danilo Toriy. O Repositório é público
                        e pode ser acessado por qualquer um que tiver vontade de ver
                        o processo de desenvolvimento do projeto.
                    </p>
                </a>

                <a class="card__item" id="card-2">
                    <img src="/projeto-landing-page/assets/icons/add-icon.svg" id="card__item--add">
                    <p class="card__item--text">
                        Caso deseje criar uma página de apresentação pessoal, o projeto
                        foi desenvolvido de forma que possa ser replicado via código ou 
                        por meio do preenchimento de informações.                
                    </p>
                </a>

                <a class="card__item" id="card-3">
                    <img src="/projeto-landing-page/assets/icons/change-icon.svg" id="card__item--mode">
                    <p class="card__item--text">
                        O Projeto foi desenvolvido para ser responsivo, ou seja, se adaptando
                        a diferentes tipos de telas. Além disso, ela possui troca entre modo
                        escuro e claro, bastando clicar aqui ou clicar no ícone no cabeçalho 
                        para alternar o modo de exibição.
                    </p>
                </a>

            </div>
        </section>
    `
}

function loadAboutMePage(){

    const estilo = document.getElementById("page__style");
    document.title = "Sobre Mim";

    estilo.href = "/projeto-landing-page/styles/about_me.css";

    document.getElementById("main").innerHTML = `
        <section id="about-me">
            <div class="card">
                <div class="container">
                    <img src="/projeto-landing-page/assets/img/logo.jpg" alt="Foto de perfil" id="img-profile">
                    <div class="card__infos">
                        <h2 class="card__info--name">Nome: Danilo Riki Toriy</h2>
                        <h2 class="card__info--age">Idade: 19 anos</h2>
                        <h2 class="card__info--carreer">Carreira: Estudante de Engenharia de Software</h2>
                        <h2 class="card__info--occupation"> Ocupação: Estagiário de Desenvolvimento de Software</h2>
                        <h2 class="card__info--enterprise"> Empresa: DB1 Global Software</h2>
                    </div>
                </div>
                <p class="card__biography"> <strong>Biografia:</strong> <br>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti nemo et, placeat vel laboriosam dicta quo eveniet dolore excepturi accusamus 
                    quisquam, labore deserunt totam. Fugiat nisi impedit debitis ad eligendi.</p>
                <hr>
                <p class="card__hobbies"> <strong>Hobbies:</strong> <br>
                    Meus hobbies incluem Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum impedit magni maiores hic, dolore sint praesentium aut voluptate totam, 
                    blanditiis repellat eaque. Deserunt soluta ab ex culpa accusantium repellendus in.
                </p>
                <hr>
                <p class="card__dislike"> <strong>Desgostos:</strong> <br>
                    Meus desgostos incluem Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum impedit magni maiores hic, dolore sint praesentium aut voluptate totam, 
                    blanditiis repellat eaque. Deserunt soluta ab ex culpa accusantium repellendus in.
                </p>
                <hr>
                <p class="card__goals"> <strong>Objetivos de Vida:</strong> <br>
                    Meus objetivos de vida incluem Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum impedit magni maiores hic, dolore sint praesentium aut voluptate totam, 
                    blanditiis repellat eaque. Deserunt soluta ab ex culpa accusantium repellendus in.
                </p>
            </div>
        </section>
    `
}

function loadHabilitiesPage(){

    const estilo = document.getElementById("page__style");
    document.title = "Habilidades";

    estilo.href = "/projeto-landing-page/styles/habilities.css";

    document.getElementById("main").innerHTML = `
        <section id="habilidades">
            <div class="habilidades__container">
                <h1 class="habilidades__title">Habilidades</h1>
                <div id="habilidades__cards--container">
                </div>
            </div>

            <div class="button__container">
                <button type="button" id="button__removeHability">
                    <img src="/projeto-landing-page/assets/icons/remove-icon.svg" alt="Ícone de Remover Habilidade"
                    id="icon__img--remove">    
                    <span id="remove__text">Remover Habilidade</span>
                </button>
                <button type="button" id="button__openPopUp">
                    <img src="/projeto-landing-page/assets/icons/add-icon.svg" alt="Ícone de Adicionar Habilidade" 
                    id="icon__img--add">
                    <span id="add__text">Adicionar Habilidade</span>
                </button>
            </div>
        </section>
    `
    inicializarBotoes();
    loadHabilities();
}

function loadContactPage(){

    const estilo = document.getElementById("page__style");
    document.title = "Contato e Sobre";

    estilo.href = "/projeto-landing-page/styles/contact.css";

    document.getElementById("main").innerHTML = `
        <section id="about">
            <div class="about__container">
                <p>Essa página foi desenvolvida usando as seguintes tecnologias: </p>
                <br>

                <ul id="lista__tecnologias">
                    <li class="tecnologia__item">
                        <img src="/projeto-landing-page/assets/icons/html-icon.svg" alt="Ícone do HTML"
                        id="html-icon">
                        <span id="html">HTML</span> 
                    </li>
                
                    <li class="tecnologia__item">
                        <img src="/projeto-landing-page/assets/icons/css-icon.svg" alt="Ícone do CSS"
                        id="css-icon">
                        <span id="css">CSS</span> 
                    </li>
                    
                    <li class="tecnologia__item">
                        <img src="/projeto-landing-page/assets/icons/javascript-icon.svg" alt="Ícone do
                        JavaScript" id="javascript-icon">
                        <span id="js">JavaScript</span> 
                    </li>
                </ul>
                <br>

                <hr>

                <p>Além disso, para Repositório do projeto, foram utilizados: </p>
                <br>

                <ul id="lista__versionamento">
                    <li class="versionamento__item">
                        <img src="/projeto-landing-page/assets/icons/git-icon.svg" alt="Ícone do Git"
                        id="git-icon">
                        <span id="git">Git</span><br>
                        <p>Para versionamento de código </p><br> 
                    </li>
                    
                    <li class="versionamento__item">
                        <img src="/projeto-landing-page/assets/icons/github-icon.svg" alt="Ícone do Github"
                        id="github-icon">
                        <span id="github">GitHub</span> <br>
                        <p>Como Repositório do projeto </p><br>
                    </li>
                </ul>

                    <hr>

                    <p>Para controle e gestão, foram usados: </p>
                    <br>

                <ul id="lista__gestao">
                    <li class="gestao__item">
                        <img src="/projeto-landing-page/assets/icons/azure-devops-icon.svg" alt="Ícone do
                        Azure DevOps" id="azure-devops-icon">
                        <span id="azure">Azure DevOps</span> <br>
                        <p>Para controle de requisitos com User Stories e apontamento de horas </p><br>
                    </li>
                    
                    <li class="gestao__item">
                        <img src="/projeto-landing-page/assets/icons/excalidraw-icon.svg" alt="Ícone do 
                        Excalidraw" id="excalidraw-icon">
                        <span id="excalidraw">Excalidraw</span> <br>
                        <p>Para backlog e gestão de sprints de forma visual </p><br>
                    </li>
                </ul>
            </div>
        </section>

        <section id="contact">
            <div class="contact__container">
                <hr>
                <p> 
                    Deseja deixar comentários ou feedbacks? <br>
                    Isso é muito importante para o desenvolvimento do projeto e pessoal do desenvolvedor!
                </p>
                <br>
                <br>
                <ul id="lista__contato">
                    <li class="contato__item">
                        <img src="/projeto-landing-page/assets/icons/email-icon.svg" alt="Ícone de Email"
                        id="contact__email">
                        <a id="email" href="mailto:danilo.toriy@db1.com.br">Email</a>
                    </li>
                    <li class="contato__item">
                        <img src="/projeto-landing-page/assets/icons/github-icon.svg" alt="Ícone do Github"
                        id="contact__github">
                        <a id="github__contact" href="https://github.com/danilo-toriy-db1">GitHub</a>
                    </li>
                </ul>
            </div>
        </section>
    `
}

