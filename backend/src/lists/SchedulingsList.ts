import Scheduling from '../models/Scheduling'

class SchedulingsList {
    private schedules: Scheduling[]

    constructor() {
        this.schedules = []
    }

    create(horario: Date, patientCPF: string, medicCRM: string):Scheduling { 
        const schedule = new Scheduling()

        Object.assign(schedule, {
            horario,
            patientCPF,
            medicCRM
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
 
    findAllByCPF(patientCPF: string): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.patientCPF === patientCPF)

        return schedule
    }

    findAllByCRM(medicCRM: string): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.medicCRM === medicCRM)

        return schedule
    }

    /* TODO: 
          [] Antes de criar um agendamento verificar se já existe um agendamento para essa pessoa e esse médico nesse dia
          [] ...

          Pensar em mais requisitos
    */
}

export default SchedulingsList

