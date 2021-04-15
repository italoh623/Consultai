import MedicalRecord from '../models/MedicalRecord'

class MedicalRecordsList {
    private medicalRecords: MedicalRecord[]

    constructor() {
        this.medicalRecords = []
    }

    /* TODO:
        * [] Analisar como implementar o upload de arquivos para os prontuarios: filesystem do node.
    */
        
    adicionarArquivo(patientCPF: string, arquivo: File): void {
        const existentMedicalRecord = this.medicalRecords.find(medicalRecord => medicalRecord.patientCPF === patientCPF) 

        if(!existentMedicalRecord) {
            throw new Error('Medical record not found!')
        }

        // após discutir, continuar a implementação


    }
}

export default MedicalRecordsList