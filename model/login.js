export class Login {
    aluno = '333'
    professor = '444'
    admin = '555'
    constructor() {}

    
    logar(usuario) {
        if(usuario === this.aluno) {
            window.location.href = "aluno.html"
        } else if (usuario === this.professor ) {
            window.location.href = "professor.html"
        } else if (usuario === this.admin ) {
            window.location.href = "secretaria.html"
        } else {
            alert('Digite matricula de Usuario corretamente')
        }
    }
}
