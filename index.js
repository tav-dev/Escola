
import {  Login  } from "./model/login.js"
import { Secretaria } from "./model/secretaria.js"
import { Turma } from "./model/turma.js"


const inputCadastroNomeDeUsuario = document.querySelector('#cadastroNomeDeUsuario')
const inputCadastroDeUsuario = document.querySelector('#cadastroDeUsuario')
const inputCadastroTurma = document.querySelector('#cadastroTurma')
const btnSalvarUsuario = document.querySelector('#salvarUsuario')
const btnSalvarTurma = document.querySelector('#salvarTurma')
const inputMatricula = document.querySelector('#matricula')
const inputEntrar = document.querySelector('#entrar')

btnSalvarUsuario.addEventListener('click', novoUsuario)
btnSalvarTurma.addEventListener('click', novaTurma)
// inputEntrar.addEventListener('click', logarUsuario)

// const login = new Login()
const secretaria = new Secretaria(new Turma())
console.log(secretaria)

// function logarUsuario() {
//     const matricula = inputMatricula.value
//     login.logar(matricula)
// }    

function novoUsuario() {
    const inputCadastroNome = inputCadastroNomeDeUsuario.value
    const inputCadastroUsuario = inputCadastroDeUsuario.value
    secretaria.cadastrarUsuario(inputCadastroNome,inputCadastroUsuario)
}       

function novaTurma() {
    const novaTurma = inputCadastroTurma.value
    secretaria.cadastrarTurma(novaTurma)
    console.log(novaTurma)
}



