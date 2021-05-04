import Archive from "./Archive"

class MedicalRecord {
    patientCPF: string
    arquivos: Archive[]
    created_at: Date
    updated_at: Date
}

export default MedicalRecord