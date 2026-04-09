import { getHabilities } from "./habilitiesContainer.js";  

export function loadHabilities(){
    const habilities = getHabilities();
    const habilitiesContainer = document.getElementById("habilidades__cards--container");

    habilitiesContainer.innerHTML = ' ';

    if (habilities.length === 0) {
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
                <div class="habilidade__content">
                    <h3> ${habilidade.habilidade} </h3>
                </div>
        `
        habilitiesContainer.appendChild(div);
    });
}

//loadHabilities();