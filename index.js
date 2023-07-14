import { Login } from "./model/login.js"

const inputMatricula = document.querySelector('#matricula')
const inputEntrar = document.querySelector('#entrar')

inputEntrar.addEventListener('click', logar)

const login = new Login()

function logar() {
    const matricula = inputMatricula.value
    login.logar(matricula)
}