export class Disciplina {
    inicio
    fim
    constructor(nome, tipoDeUsuario, diasDaSemana, id = crypto.randomUUID()) {
        this.id = id
        this.nome = nome
        this.tipoDeUsuario = tipoDeUsuario
        this.diasDaSemana = diasDaSemana
    }
}