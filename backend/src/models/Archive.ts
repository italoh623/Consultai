import { v1 as uuid } from 'uuid'
// Dar uma limpa depois nesses atributos
class Archive {
    id: string
    tipo: string
    name: string
    crm : string
    obs : string
    description : string 
    tamanho: string
    conteudo: File
    created_at: Date
    updated_at: Date

    constructor() {
        this.id = uuid()
    }
}

export default Archive