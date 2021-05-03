export class Patient {
    cpf: string
    name: string
    email: string
    idade: number
    created_at: Date
    updated_at: Date

    constructor(
        cpf: string, 
        name: string, 
        email: string, 
        idade: number,
        created_at: Date,
        updated_at: Date
    ) {
    this.cpf = cpf;
    this.name = name;
    this.email = email;
    this.idade = idade;
    this.created_at = created_at;
    this.updated_at = updated_at;
    }
}