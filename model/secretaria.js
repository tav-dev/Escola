import TIPO_DE_USUARIO from "./tipoDeUsuario.js";
import { InvalidArgumentValue } from "../exception/exception.js";
import { Aluno } from "./aluno.js";
import { Professor } from "./professor.js";
import { Turma } from "./turma.js";
import { LocalStorageManager } from "../service/local-storage.js";
import { Disciplina } from "./disciplina.js";

export class Secretaria {
  constructor() {
    this.aluno = [];
    this.turma = [];
    this.professor = [];
    this.disciplina = [];
    this.auxiliar = [];
    this.srvStorage = new LocalStorageManager();
  }

  cadastrarUsuario(nome, nomeDeUsuario) {
    const select = document.querySelector("#select");
    let valor = select.value;
    const id = Math.random().toString(36).substr(2, 9);

    if (!nome || !nomeDeUsuario)
      throw new InvalidArgumentValue("Campos devem ser Preenchidos!");
    else if (valor === TIPO_DE_USUARIO.ALUNO) {
      this.aluno.push(new Aluno(nome, nomeDeUsuario));
      this.srvStorage.saveItem(id, this.aluno);
    } else if (valor === TIPO_DE_USUARIO.PROFESSOR) {
      this.professor.push(new Professor(nome, nomeDeUsuario));
      this.srvStorage.saveItem(id, this.professor);
    } else if (valor === TIPO_DE_USUARIO.AUXILIAR) {
      this.auxiliar.push(nome, nomeDeUsuario);
      this.srvStorage.saveItem(id, this.auxiliar);
    }
  }
  cadastrarTurma(nome) {
    const id = Math.random().toString(36).substr(2, 9);
    this.turma.push(new Turma(nome));
    this.srvStorage.saveItem(id, this.turma);
  }

  cadastrarDisciplina(nome) {
    const id = Math.random().toString(36).substr(2, 9);
    this.disciplina.push(new Disciplina(nome));
    this.srvStorage.saveItem("Disciplina", this.disciplina);
  }

  pegarTurmasPorDisciplina(disciplina) {
    const selectElement = document.querySelector("#valorSelect");
    selectElement.innerHTML = "";
    
    const disciplinaSelecionada = () => {
        const disciplinaSelecionada = selectElement.value
        console.log(disciplinaSelecionada)
    }
    
    for (let contador = 0; contador < disciplina.length; contador++) {
        const disciplinasCadastradas = disciplina[contador];
        
        const option = document.createElement("option");
        option.value = disciplinasCadastradas.nome;
        option.text = disciplinasCadastradas.nome;
        selectElement.appendChild(option);
        selectElement.addEventListener('change', disciplinaSelecionada)
    }
  }
}
