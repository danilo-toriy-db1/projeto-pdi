import { loadHabilities } from "./habilitiesLoader.js"

const habilidades = [
    {"id": "h1",
     "habilidade": "HTML",
     "tipo": "Hard Skill"   
    },
    {"id": "h2",
     "habilidade": "CSS",
     "tipo": "Hard Skill"   
    },
    {"id": "h3",
     "habilidade": "JavaScript",
     "tipo": "Hard Skill"   
    },
    {"id": "s1",
     "habilidade": "Comunicação",
     "tipo": "Soft Skill"   
    },
    {"id": "s2",
     "habilidade": "Trabalho em equipe",
     "tipo": "Soft Skill"}
]

localStorage.setItem('listaHabilidades', JSON.stringify(habilidades));

export function getHabilities(){
    return JSON.parse(localStorage.getItem('listaHabilidades'));
}

export function addHabilities(novaHabilidade){
    habilidades.push(novaHabilidade);
    localStorage.setItem('listaHabilidades', JSON.stringify(habilidades));
    loadHabilities();
}

export function removeHabilities(habilidadesAtualizado){
    localStorage.setItem('listaHabilidades', JSON.stringify(habilidadesAtualizado));
}