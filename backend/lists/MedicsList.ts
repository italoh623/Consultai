import Medic from '../models/Medic'

class MedicsList {
    private medics: Medic[]

    constructor() {
        this.medics = []
    }

    create(crm: string, nome: string, especialidade: number, email: string): Medic {
        const existentMedic = this.findByCrm(crm)

        if(existentMedic) {
            throw new Error('Medic already registered!')
        }
        
        const medic = new Medic()

        Object.assign(Medic, {
            crm,
            nome,
            especialidade,
            email,
            created_at: new Date,
            updated_at: new Date
        })

        this.medics.push(medic)

        return medic
    }

    findByCrm(crm: string): Medic {
        const existentMedic = this.medics.find(medic => medic.crm === crm)

        return existentMedic
    }

    getAll(): Medic[] {
        return this.medics
    }

    delete(crm: string): Medic[] {
        const MedicIndex = this.medics.findIndex(Medic => Medic.crm === crm)

        if(MedicIndex == -1) {
            throw new Error('Medic does not exist!')
        }

        this.medics.splice(MedicIndex, 1)

        return this.getAll()
    }
}

export default MedicsList