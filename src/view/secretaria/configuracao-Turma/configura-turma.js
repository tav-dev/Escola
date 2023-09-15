import { DiasDaSemana } from "../../../model/entity/dias.js";
import { SecretariaService } from "../../../model/service/secretaria.service.js";

const selectTurma = document.querySelector("#selectTurma");
const inicio = document.querySelector('#inicio')
const termino = document.querySelector('#termino')
const selectDisciplina = document.querySelector("#selectDisciplina");
const renderDisciplina = document.querySelector("#render-disciplina");
const addBtn = document.querySelector("#btn-adicionar");
const buttonSalvar = document.querySelector("#buttonSalvar")
selectTurma.addEventListener("focus", configurarTurma);
addBtn.addEventListener("click", addDisciplina);
buttonSalvar.addEventListener("click",salvarTurmaConfigurada);

function configurarTurma() {
  selectTurma.innerHTML = "";
  selectDisciplina.innerHTML = "";

  const secretariaService = new SecretariaService();
  const turmas = secretariaService.buscarTurmas();
  const disciplinas = secretariaService.buscarDisciplinas();

  for (let posicao = 0; posicao < turmas.length; posicao++) {
    const elementoNaPosicao = turmas[posicao];

    const option = document.createElement("option");
    option.value = elementoNaPosicao.nome;
    option.text = elementoNaPosicao.nome;
    selectTurma.appendChild(option);
  }

  for (let posicao = 0; posicao < disciplinas.length; posicao++) {
    const elementoNaPosicao = disciplinas[posicao];

    const option = document.createElement("option");
    option.value = elementoNaPosicao.nome;
    option.text = elementoNaPosicao.nome;
    selectDisciplina.appendChild(option);
  }
  
}
function salvarTurmaConfigurada () {
  const secretariaService = new SecretariaService()
  const dias = new DiasDaSemana()
  const turma = selectTurma.value
  const inicial  = inicio.value
  const final = termino.value

  if(secretariaService.buscarTurma(turma)) {
  
    secretariaService.salvarTurma(turma,inicial, final)
  }

}
function addDisciplina(e) {
  e.preventDefault();
  renderDisciplina.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = selectDisciplina.value;
  renderDisciplina.appendChild(li);
  
}
