import Archive from '../models/Archive'
import fs from 'fs'

class ArchiveList{
    private archives: Archive[]
    constructor() {
        this.archives = [
            {
                id: '12',
                crm: '123', 
                cpf: '123',
                obs: 'qualquer coisa', 
                description: 'a mesma coisa',  
                conteudo: {foo:'fffff'},
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: '13',
                crm: '456', 
                cpf: '123',
                obs: 'qualquer coisa 2', 
                description: 'a mesma coisa 2',  
                conteudo: {foo:'ffffffffffff'},
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
    }

    getAll() {
        return this.archives
    }

    getByCPF(cpf: string) {
        return this.archives.filter(a => a.cpf === cpf)
    }

    add(archive: Archive) {
        this.archives.push(archive)
    }
}

export default ArchiveList