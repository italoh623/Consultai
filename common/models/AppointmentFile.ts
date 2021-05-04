export class AppointmentFile {
    patientCPF: string
    medicCRM: string 
    consultaId: string
    queixas: string
    doencas: string
    medicacoes: string 
    antecedentes: string 
    peso: string
    altura: string
    pressao_art: string
    hipotese: string 
    conduta: string
    created_at: Date

    constructor(
        patientCPF: string,
        medicCRM: string, 
        consultaId: string,
        queixas: string,
        doencas: string,
        medicacoes: string, 
        antecedentes: string, 
        peso: string,
        altura: string,
        pressao_art: string,
        hipotese: string, 
        conduta: string,
        created_at: Date
    ) {
        this.patientCPF = patientCPF
        this.medicCRM = medicCRM
        this.consultaId = consultaId
        this.queixas = queixas
        this.doencas = doencas
        this.medicacoes = medicacoes
        this.antecedentes = antecedentes
        this.peso = peso
        this.altura = altura
        this.pressao_art = pressao_art
        this.hipotese = hipotese
        this.conduta = conduta
        this.created_at = created_at
    }
}