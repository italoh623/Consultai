export class Archive {
    id: string
    crm : string
    cpf: string
    obs : string
    description : string 
    conteudo: Object
    created_at: string
    updated_at: string


    constructor(id: string, crm: string, obs: string, description: string, cpf: string, conteudo: Object, created_at: string) {
        this.id = id;
        this.crm = crm;
        this.cpf = cpf;
        this.obs = obs;
        this.description = description;
        this.conteudo = conteudo;
        this.created_at = created_at;
    }
}