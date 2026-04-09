import { addHabilities } from "./habilitiesContainer.js"

const btnAbrirPopUp = document.getElementById("button__openPopUp");

btnAbrirPopUp.addEventListener('click', () => {
    const div = document.createElement('div');

    div.id = 'overlay__container';

    div.innerHTML = `
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
    `;

    document.body.appendChild(div);
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
})