import AppointmentFile from '../models/AppointmentFile'

export default class AppointmentFileList {
    private files: AppointmentFile[]

    constructor() {
        this.files = [
            {
                patientCPF: '123',
                medicCRM: '123',
                consultaId: '123',
                queixas: 'Sentindo enxaqueca e com febre.',
                doencas: 'Nenhum historico de doencas.',
                medicacoes: 'Dipirona', 
                antecedentes: 'Nenhum antecedente familiar', 
                peso: '80',
                altura: '1.75',
                pressao_art: '80x120',
                hipotese: 'Virose',
                conduta: 'Tomar dipirona por 3 dias.',
                created_at: new Date()
            }
        ]
    }

    create(
        patientCPF: string,
        medicCRM: string,
        consultaId: string,
        queixas: string,
        doencas: string,
        medicacoes: string, 
        antecedentes: string, 
        peso: Number,
        altura: Number,
        pressao_art: string,
        hipotese: string,
        conduta: string
    ): AppointmentFile {
        const file = new AppointmentFile()
        const created_at = new Date()

        Object.assign(file, {
            patientCPF,
            medicCRM,
            consultaId,
            queixas,
            doencas,
            medicacoes, 
            antecedentes, 
            peso,
            altura,
            pressao_art,
            hipotese,
            conduta,
            created_at
        })

        this.files.push(file)

        return file
    }

    getPatientFiles(cpf: string): AppointmentFile[] {
        const patientFiles = this.files.filter(file => file.patientCPF === cpf)

        return patientFiles
    }

    getAll(): any[] {
        return this.files
    }

}