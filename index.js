import { Login } from "./model/login.js"
import { Secretaria } from "./model/secretaria.js"

const inputMatricula = document.querySelector('#matricula')
const inputEntrar = document.querySelector('#entrar')
const inputCadastroNomeDeUsuario = document.querySelector('#cadastroNomeDeUsuario')
const inputCadastroDeUsuario = document.querySelector('#cadastroDeUsuario')
const inputCadastroTurma = document.querySelector('#cadastroTurma')
const btnSalvarUsuario = document.querySelector('#salvarUsuario')
const btnSalvarTurma = document.querySelector('#SalvarTurma')

const login = new Login()
const secretaria = new Secretaria()
console.log(secretaria)

inputEntrar.addEventListener('click', logarUsuario)
btnSalvarUsuario.addEventListener('click', novoUsuario)
btnSalvarTurma.addEventListener('click', novaTurma)

function logarUsuario() {
    const matricula = inputMatricula.value
    login.logar(matricula)
}

function novoUsuario() {
   const inputCadastroNome = inputCadastroNomeDeUsuario.value
   const inputCadastroUsuario = inputCadastroDeUsuario.value
   secretaria.cadastrarUsuario(inputCadastroNome,inputCadastroUsuario)
}   

function novaTurma() {
    const inputTurma = inputCadastroTurma.value
    secretaria.cadastrarTurma(inputTurma)
}



