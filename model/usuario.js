import TIPO_DE_USUARIO from "./tipoDeUsuario.js"

export class Usuario {
    constructor(matricula, nomeDoUsuario) {
        this.matricula = matricula
        this.nomeDoUsuario = nomeDoUsuario
        this.tipoDoUsuario = TIPO_DE_USUARIO
    }


}