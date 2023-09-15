import { SecretariaService } from "../model/service/secretaria.service.js";

export class SecretariaController {
  constructor() {
    this.secretariaService = new SecretariaService();
  }

  cadastrarDisciplinas(nomeDeDisciplina) {
    try {
      const disciplina =
        this.secretariaService.cadastrarDisciplina(nomeDeDisciplina);

      console.log(disciplina);
    } catch (error) {
      console.error(error);
    }
  }

  cadastrarTurmas(nomeDaTurma) {
    try {
      const turmas = this.secretariaService.cadastrarTurma(nomeDaTurma);
      console.log(turmas);
    } catch (error) {
      console.error(error) // tratar erros depois
    }
  }

  configurarTurma(turma) {
    try {
        const turmas = this.secretariaService.buscarTurma(turma)
        console.log(turmas)
    } catch (error) {
        console.error(error) // tratar erros depois
    }

  }
}
