
export class Turma {

    constructor(nome,inicio, fim, diasDaSemana,tipoDeUsuario, id = crypto.randomUUID()) {
        this.id = id
        this.nome = nome,
        this.inicio = inicio
        this.fim = fim
        this.tipoDeUsuario = tipoDeUsuario
        this.diasDaSemana = diasDaSemana
    }
}