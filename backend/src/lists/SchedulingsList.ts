import Scheduling from '../models/Scheduling'

class SchedulingsList {
    private schedules: Scheduling[]

    constructor() {
        this.schedules = []
    }

    create(horario: Date, patientCPF: Number, medicCRM: Number):Scheduling { 
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

    remover(id: string): Scheduling[] {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule.id === id)

        if(scheduleIndex == -1) {
            throw new Error('Schedule does not exist!')
        }

        this.schedules.splice(scheduleIndex, 1)

        return this.schedules
    }

    getAll(): Scheduling[] {
        return this.schedules
    }
 
    findAllByCPF(patientCPF: Number): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.patientCPF === patientCPF)

        return schedule
    }

    findAllByCRM(medicCRM: Number): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.medicCRM === medicCRM)

        return schedule
    }
    checkScheduling(horario: Date, patientCPF: Number, medicCRM: Number){
        if(this.findAllByCPF(patientCPF)!=null){
            return false;
        }
        else{
            this.create(horario,patientCPF,medicCRM);
        }
    }
    /* TODO: 
         talvez atualizar o horário: já consegue fazer isso com o que eu já tenho?
    */
}

export default SchedulingsList

