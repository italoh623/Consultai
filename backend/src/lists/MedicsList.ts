import Medic from '../models/Medic'

class MedicsList {
    private medics: Medic[]

    constructor() {
        this.medics = [
            {
                crm: '123',
                name: 'Baskhara',
                email: 'baskhara@baskhara.com',
                especialidade: 'ginecologista',
                created_at: new Date(),
                updated_at: new Date(),
                horarios: [
                    { disponivel: true, horario: new Date() },
                    { disponivel: false, horario: new Date() },
                    { disponivel: true, horario: new Date() }
                ]

           },
           {
                crm: '456',
                name: 'John Doe',
                email: 'johndoe@example.com',
                especialidade: 'psiquiatra',
                created_at: new Date(),
                updated_at: new Date(),
                horarios: [
                    { disponivel: true, horario: new Date() },
                    { disponivel: false, horario: new Date() },
                    { disponivel: true, horario: new Date() }
                ]
           },
           {
                crm: '789',
                name: 'Juiz Da massa',
                email: 'juiz@massa.com',
                especialidade: 'dermatologista',
                created_at: new Date(),
                updated_at: new Date(),
                horarios: [{
                    disponivel: true,
                    horario: new Date()
                }]
           },
           
        ]
    }

    create(crm: string, nome: string, especialidade: string, email: string): Medic {
        const existentMedic = this.findByCrm(crm)

        if(existentMedic) {
            throw new Error('Medic already registered!')
        }
        
        const medic = new Medic()

        Object.assign(medic, {
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
    
    findBySpeciality(especialidade: string): Medic[] {
        const existentMedic = this.medics.filter(medic => medic.especialidade === especialidade)

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