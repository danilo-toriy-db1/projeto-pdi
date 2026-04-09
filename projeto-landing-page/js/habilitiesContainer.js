import { loadHabilities } from "./habilitiesLoader.js"

const habilidades = [
    {"habilidade": "HTML",
     "tipo": "Hard Skill"   
    },
    {"habilidade": "CSS",
     "tipo": "Hard Skill"   
    },
    {"habilidade": "JavaScript",
     "tipo": "Hard Skill"   
    },
    {"habilidade": "Comunicação",
     "tipo": "Soft Skill"   
    },
    {"habilidade": "Trabalho em equipe",
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