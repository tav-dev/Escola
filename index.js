
import {  Login  } from "./model/login.js"
import { Secretaria } from "./model/secretaria.js"
import { Turma } from "./model/turma.js"

const inputCadastroNomeDeUsuario = document.querySelector('#cadastroNomeDeUsuario')
const inputCadastroDeUsuario = document.querySelector('#cadastroDeUsuario')
const inputCadastroTurma = document.querySelector('#cadastroTurma')
const inputCadastroDisciplina = document.querySelector('#cadastroDisciplina')
const btnSalvarDisciplina = document.querySelector('#salvarDisciplina')
const btnSalvarUsuario = document.querySelector('#salvarUsuario')
const btnSalvarTurma = document.querySelector('#salvarTurma')
const inputMatricula = document.querySelector('#matricula')
const inputEntrar = document.querySelector('#entrar')
const mostraDisciplinas = document.querySelector('#valorSelect')

btnSalvarUsuario?.addEventListener('click', novoUsuario)
btnSalvarDisciplina?.addEventListener('click', novaDisciplina)
btnSalvarTurma?.addEventListener('click', novaTurma)
inputEntrar?.addEventListener('submit', logarUsuario)
mostraDisciplinas?.addEventListener('click', mostraDisciplina)
// addEventListener('focus')

const login = new Login()
const secretaria = new Secretaria()
console.log(secretaria)

function logarUsuario() {
    const matricula = inputMatricula.value    
}    

function novoUsuario() {
    const inputCadastroNome = inputCadastroNomeDeUsuario.value
    const inputCadastroUsuario = inputCadastroDeUsuario.value
    secretaria.cadastrarUsuario(inputCadastroNome,inputCadastroUsuario)
}       

function novaTurma() {
    const novaTurma = inputCadastroTurma.value
    const novaInstanciaTurma = new Turma(novaTurma);
    secretaria.cadastrarTurma(novaInstanciaTurma)
    console.log(novaTurma)
}

function novaDisciplina() {
    const novaDisciplina = inputCadastroDisciplina.value
    secretaria.cadastrarDisciplina(novaDisciplina)

}

function mostraDisciplina () {
    const disciplina =  secretaria.srvStorage.getItem('Disciplina')
    // console.log(disciplina)
    secretaria.pegarTurmasPorDisciplina(disciplina)
    
}


