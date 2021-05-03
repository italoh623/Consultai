export class Archive {
    id: string
    tipo: string
    name: string
    crm : string
    obs : string
    description : string 
    tamanho: string
    conteudo: File


    constructor(id: string, tipo: string, name: string, crm: string, obs: string, description: string, tamanho: string, conteudo: File) {
        this.id = id;
        this.tipo = tipo;
        this.name = name;
        this.crm = crm;
        this.obs = obs;
        this.description = description;
        this.tamanho = tamanho;
        this.conteudo = conteudo;
    }
}