export class TipoDeUsuario {
  static Auxiliar = 'Auxiliar'
  static Aluno = 'Aluno'
  static Professor = 'Professor'
}

export class Usuario {
  constructor(nome, senha, tipoDeUsuario, matricula = crypto.randomUUID()) {
    this.matricula = matricula
    this.nome = nome
    this.senha = senha
    this.tipoDeUsuario = tipoDeUsuario
  }
}
