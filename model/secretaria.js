import TIPO_DE_USUARIO from "./tipoDeUsuario.js"
import {InvalidArgumentValue} from "../exception/exception.js"
import { Aluno } from "./aluno.js"
import { Professor } from "./professor.js"
import { Turma } from "./turma.js"

export class Secretaria  {
    constructor() {
        this.aluno = []
        this. turma = []
        this.professor = []
        this. disciplina = []
        this.auxiliar = []
        }

    cadastrarUsuario(nome,nomeDeUsuario) {
        const select = document.querySelector('#select')
        let valor = select.value
        
        if(!nome || !nomeDeUsuario) throw new InvalidArgumentValue('Campos devem ser Preenchidos!')
        else if(valor === TIPO_DE_USUARIO.ALUNO) {
            this.aluno.push(new Aluno(nome,nomeDeUsuario))
        } else if(valor === TIPO_DE_USUARIO.PROFESSOR) {
            this.professor.push(new Professor(nome, nomeDeUsuario))
        } else if(valor === TIPO_DE_USUARIO.AUXILIAR) {
            this.auxiliar.push(nome, nomeDeUsuario)
        }
    }
    cadastrarTurma(nome) {
        this.turma.push(new Turma(nome,null,null))
    }
}
