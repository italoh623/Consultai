import Patient from '../models/Patient'

class PatientsList {
    private patients: Patient[]

    constructor() {
        this.patients = [
           {
                cpf: '123',
                name: 'Cadu',
                email: 'cadu@cadu.com',
                idade: 24,
                created_at: new Date(),
                updated_at: new Date(),
           },
           {
                cpf: '007',
                name: 'Grisi',
                email: 'grisi@grisi.com',
                idade: 23,
                created_at: new Date(),
                updated_at: new Date(),
           },
           {
                cpf: '456',
                name: 'Italo',
                email: 'italo@italo.com',
                idade: 21,
                created_at: new Date(),
                updated_at: new Date(),
           },
           {
                cpf: '789',
                name: 'luisa',
                email: 'luisa@luisa.com',
                idade: 20,
                created_at: new Date(),
                updated_at: new Date(),
           },
           {
                cpf: '222',
                name: 'rafa',
                email: 'rafa@rafa.com',
                idade: 23,
                created_at: new Date(),
                updated_at: new Date(),
           },
        ]
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