import Patient from '../models/Patient'

class PatientsList {
    private patients: Patient[]

    constructor() {
        this.patients = []
    }

    create(cpf: string, nome: string, idade: number, email: string): Patient {
        const existentPatient = this.findByCpf(cpf)

        if(existentPatient) {
            throw new Error('Patient already registered!')
        }
        
        const patient = new Patient()

        Object.assign(patient, {
            cpf,
            nome,
            idade,
            email,
            created_at: new Date,
            updated_at: new Date
        })

        this.patients.push(patient)

        return patient
    }

    findByCpf(cpf: string): Patient {
        const existentPatient = this.patients.find(patient => patient.cpf === cpf)

        return existentPatient
    }

    getAll(): Patient[] {
        return this.patients
    }

    delete(cpf: string): Patient[] {
        const patientIndex = this.patients.findIndex(patient => patient.cpf === cpf)

        if(patientIndex == -1) {
            throw new Error('Patient does not exist!')
        }

        this.patients.splice(patientIndex, 1)

        return this.getAll()
    }
}

export default PatientsList