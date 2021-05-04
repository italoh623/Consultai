import Scheduling from '../models/Scheduling'

const date1 = new Date("Mon, 3 Oct 2021 13:30:00");
// const date2 = new Date("Mon, 3 May 2021 14:00:00");
const date3 = new Date("Mon, 3 Nov 2021 14:30:00");
const date4 = new Date("Mon, 3 May 2021 15:00:00");
class SchedulingsList {
    private schedules: Scheduling[]

    constructor() {
        this.schedules = [
            {
                id: '1',
                patientCPF: '123',
                medicCRM: '123',
                horario: date1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: '3',
                patientCPF: '007',
                medicCRM: '789',
                horario: date3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: '4',
                patientCPF: '456',
                medicCRM: '123',
                horario: date4,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
    }

    create(horario: Date, patientCPF: string, medicCRM: string):Scheduling { 
        const schedule = new Scheduling()
        
        Object.assign(schedule, {
            horario,
            patientCPF,
            medicCRM,
            created_at:new Date,
            updated_at:new Date
        })

        this.schedules.push(schedule)

        return schedule
    }

    remove(id: string): Scheduling[] {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule.id === id)

        if(scheduleIndex == -1) {
            throw new Error('Schedule does not exist!')
        }

        this.schedules.splice(scheduleIndex, 1)

        return this.schedules
    }

 
    findAllByCPF(patientCPF: string): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.patientCPF === patientCPF)
        
        return schedule
    }

    
    findAllByCRM(medicCRM: string): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.medicCRM === medicCRM)
    
        return schedule
    }

    findById(id: string): Scheduling {
        const schedule = this.schedules.find(schedule => schedule.id === id)

        return schedule
    }
          
}

export default SchedulingsList

