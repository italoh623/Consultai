import Medic from '../models/Medic'
const date1 = new Date("Mon, 3 May 2021 13:00:00");
const date2 = new Date("Mon, 3 May 2021 13:30:00");
const date3 = new Date("Mon, 3 May 2021 14:00:00");
const date4 = new Date("Mon, 3 May 2021 14:30:00");
const date5 = new Date("Mon, 3 May 2021 15:00:00");
const date6 = new Date("Mon, 3 May 2021 15:30:00");
const date7 = new Date("Mon, 3 May 2021 16:00:00");
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
                    { disponivel: false, horario: date1 },
                    { disponivel: true, horario: date2 },
                    { disponivel: true, horario: date3 },
                    { disponivel: false, horario: date4 },
                    { disponivel: true, horario: date5 },
                    { disponivel: true, horario: date6 },
                    { disponivel: true, horario: date7 },
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
                    { disponivel: false, horario: date1 },
                    { disponivel: false, horario: date2 },
                    { disponivel: true, horario: date3 },
                    { disponivel: true, horario: date4 },
                    { disponivel: true, horario: date5 },
                    { disponivel: true, horario: date6 },
                    { disponivel: true, horario: date7 },
                ]
           },
           {
                crm: '789',
                name: 'Juiz Da massa',
                email: 'juiz@massa.com',
                especialidade: 'dermatologista',
                created_at: new Date(),
                updated_at: new Date(),
                horarios: [
                    { disponivel: true, horario: date1 },
                    { disponivel: true, horario: date2 },
                    { disponivel: false, horario: date3 },
                    { disponivel: false, horario: date4 },
                    { disponivel: true, horario: date5 },
                    { disponivel: true, horario: date6 },
                    { disponivel: true, horario: date7 },
                ]
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