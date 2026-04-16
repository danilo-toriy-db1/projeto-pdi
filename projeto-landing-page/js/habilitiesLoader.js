import { getHabilities } from "./habilitiesContainer.js";  
import { selecionaHabilidadeParaExcluir } from "./habilitiesServices.js";

export function loadHabilities(){
    const habilities = getHabilities();
    const habilitiesContainer = document.getElementById("habilidades__cards--container");

    habilitiesContainer.innerHTML = ' ';

    if (!habilities || habilities.length === 0) {
        const div = document.createElement('div');
        div.className = 'vazio'

        div.innerHTML = `
                    <h3>Não há habilidades listadas...</h3>
        `

        habilitiesContainer.appendChild(div);
        return;
    }

    habilities.forEach(habilidade => {
        const div = document.createElement('div');

        const tipo = habilidade.tipo === 'Hard Skill'
                ? 'hard-skill'
                : 'soft-skill'
        
        div.className = `habilidade__type ${tipo}`
        
        div.innerHTML = `
                <div class="habilidade__content" id="${habilidade.id}">
                    <h3> ${habilidade.habilidade} </h3>
                    <button class="button__excludeHability">
                        <img src="/projeto-landing-page/assets/icons/delete-icon.svg" alt="Ícone de Lixo para
                        exclusão de Habilidade" id="img__exclusion">
                    </button>
                </div>
        `

        const btnLixeira = div.querySelector('.button__excludeHability');

        btnLixeira.addEventListener('click', () => {
            if(habilitiesContainer.classList.contains('modo-exclusao')){
                selecionaHabilidadeParaExcluir(div);
            }
        });

        habilitiesContainer.appendChild(div);
    });
}

loadHabilities();