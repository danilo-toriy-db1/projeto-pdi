import { addHabilities } from "./habilitiesContainer.js"

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
})