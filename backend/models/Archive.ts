import { v1 as uuid } from 'uuid'

class Archive {
    id: string
    tipo: string
    name: string
    tamanho: number
    conteudo: File
    created_at: Date
    updated_at: Date

    constructor() {
        this.id = uuid()
    }
}

export default Archive