import { v1 as uuid } from 'uuid'

class Feedback {
    id: string
    consultaId: string
    descricao: string

    constructor() {
        this.id = uuid()
    }
}

export default Feedback