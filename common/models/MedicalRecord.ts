class MedicalRecord {
  patientCPF: string
  conteudo: FileList
  created_at: Date
  updated_at: Date

  constructor(
    patientCPF: string, 
    conteudo: FileList, 
    created_at: Date, 
    updated_at: Date
  ) {
    this.patientCPF = patientCPF;
    this.conteudo = conteudo;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default MedicalRecord