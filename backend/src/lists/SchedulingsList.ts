import Scheduling from '../models/Scheduling'


class SchedulingsList {
    private schedules: Scheduling[]

    constructor() {
        this.schedules = [
            {
                id: 'sdhaiiusodhi',
                patientCPF: '008',
                medicCRM: '000',
                horario: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            }
        ]
    }

    create(horario: Date, patientCPF: string, medicCRM: string):Scheduling { 
        const schedule = new Scheduling()
        const existentAppointment= this.findAllByCPF(patientCPF)
        const medicosDisponiveis=this.findAllByCRM(medicCRM)
        if(existentAppointment) {
            throw new Error('Patient already made an appointment!')
        }
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
          
}

export default SchedulingsList

