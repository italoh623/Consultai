import { v1 as uuid } from 'uuid'
// Dar uma limpa depois nesses atributos
class Archive {
    id: string
    crm : string
    cpf: string
    obs : string
    description : string 
    conteudo: Object
    created_at: Date
    updated_at: Date

    constructor() {
        this.id = uuid()
    }
}

export default Archive