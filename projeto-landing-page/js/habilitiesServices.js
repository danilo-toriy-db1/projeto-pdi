import { addHabilities } from "./habilitiesContainer.js"

const modoAtualPagina = document.getElementById("habilidades__cards--container");
const btnEsquerdo = document.getElementById("button__removeHability");
const btnDireito = document.getElementById("button__openPopUp");

btnDireito.addEventListener('click', () => {
    if (modoAtualPagina.classList.contains('modo-exclusao')){
        console.log("A ser feito. Apenas teste");
        modoAtualPagina.classList.remove('modo-exclusao');
        alterarBotoesHabilidades('exclusao');
    }else{
        openPopUp();
    }
});

btnEsquerdo.addEventListener('click', () => {
    ativarModoRemoveHabilidades();
});


//-------------------------------------------------------------------------------------------------
//Função de Adição de habilidades - Overlay
//-------------------------------------------------------------------------------------------------

function openPopUp(){

    const overlay = document.createElement('div');

    overlay.className = 'overlay__display';

    overlay.innerHTML = `
        <div class="overlay__container">
            <div class="close__container">
                <button id="button__close">
                    <img src="/projeto-landing-page/assets/icons/close-icon.svg" alt="Ícone do botão de fechar">
                </button>
            </div> 
            <form id="form__container">
                <div class="input__container">
                    <label for="nova-habilidade">Habilidade: </label>
                    <input type="text" name="nova-habilidade" id="nova-habilidade" placeholder="Digite a habilidade aqui..." required>
                    <label for="tipo-habilidade" id="tipo">Tipo: </label>
                    <select name="tipo" id="tipo-habilidade" required>
                        <option value="soft">Soft-Skill</option>
                        <option value="hard">Hard-Skill</option>
                    </select>
                </div>
                <div class="button__container">
                    <button type="reset" id="button__reset">Limpar</button>
                    <button id="button__submit">Enviar</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(overlay);

    const btnFecharPopUp = overlay.querySelector('#button__close');

    btnFecharPopUp.addEventListener('click', () => {
        overlay.remove();
    });

    const formulario = document.getElementById("form__container");

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        let habilidade = document.getElementById("nova-habilidade").value;
        let tipo = document.getElementById("tipo-habilidade").value === "soft"
                ? "Soft Skill"
                : "Hard Skill";

        const novaHabilidade = {
            "habilidade": habilidade,
            "tipo": tipo
        };

        addHabilities(novaHabilidade);

        formulario.reset();
        overlay.remove();
    });

}

//-------------------------------------------------------------------------------------------------
//Função de Remoção de habilidades
//-------------------------------------------------------------------------------------------------

function ativarModoRemoveHabilidades(){
    const habilitiesContainer = document.getElementById("habilidades__cards--container");

    if (habilitiesContainer.classList.contains('modo-exclusao')){
        habilitiesContainer.classList.remove('modo-exclusao');
        alterarBotoesHabilidades("exclusao");
        return;
    }
    
    habilitiesContainer.classList.add('modo-exclusao');
    alterarBotoesHabilidades("visualização");
}


//-------------------------------------------------------------------------------------------------
//Funções auxiliares
//-------------------------------------------------------------------------------------------------

function alterarBotoesHabilidades(modoAtual){
    if (modoAtual === "exclusao"){
        const imgRemoverHabilidade = document.getElementById("icon__img--remove");

        document.getElementById("remove__text").innerText = 'Remover Habilidade';

        imgRemoverHabilidade.src = '/projeto-landing-page/assets/icons/remove-icon.svg';
        imgRemoverHabilidade.alt = 'Ícone de Remover Habilidade';

        const imgAddHabilidade = document.getElementById("icon__img--add");

        document.getElementById("add__text").innerText = 'Adicionar Habilidade';

        imgAddHabilidade.src = '/projeto-landing-page/assets/icons/add-icon.svg';
        imgAddHabilidade.alt = 'Ícone de Adicionar Habilidade';
        return;
    }
    const imgCancelarExclusao = document.getElementById("icon__img--remove");

    document.getElementById("remove__text").innerText = 'Cancelar Remoção';

    imgCancelarExclusao.src = '/projeto-landing-page/assets/icons/black-close-icon.svg';
    imgCancelarExclusao.alt = 'Ícone de cancelar operação';

    const imgConfirmaExclusao = document.getElementById("icon__img--add");

    document.getElementById("add__text").innerText = 'Confirmar Exclusão';

    imgConfirmaExclusao.src = '/projeto-landing-page/assets/icons/x-delete-icon.svg';
    imgConfirmaExclusao.alt = 'Ícone de confirmação de exclusão';

}

//-------------------------------------------------------------------------------------------------
//Funções exportadas para o Loader
//-------------------------------------------------------------------------------------------------
export let listaExclusao = [];

export function selecionaHabilidadeParaExcluir(divDaArvore, nomeHabilidadeExclusao){

    if (divDaArvore.classList.contains('selecionado-exclusao')){
        divDaArvore.classList.remove('selecionado-exclusao');
        listaExclusao = listaExclusao.filter(nomeHabilidade => nomeHabilidade !== nomeHabilidadeExclusao);
    }else{
        divDaArvore.classList.add('selecionado-exclusao');
        listaExclusao.push(nomeHabilidadeExclusao);
    }
    
}