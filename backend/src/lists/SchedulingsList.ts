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

    remove(id: string): Scheduling[] {
        const scheduleIndex = this.schedules.findIndex(schedule => schedule.id === id)

        if(scheduleIndex == -1) {
            throw new Error('Schedule does not exist!')
        }

        this.schedules.splice(scheduleIndex, 1)

        return this.schedules
    }

 
    findAllByCPF(patientCPF: Number): Scheduling[] {
        const schedule = this.schedules.filter(schedule => schedule.patientCPF === patientCPF)

        return schedule
    }

<<<<<<< HEAD
    
    findAllByCRM(medicCRM: string): Scheduling[] {
=======
    findAllByCRM(medicCRM: Number): Scheduling[] {
>>>>>>> 9d3e579bc46f5e9fab12930289126b56d6787e53
        const schedule = this.schedules.filter(schedule => schedule.medicCRM === medicCRM)
    
        return schedule
    }
<<<<<<< HEAD
          
=======
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
>>>>>>> 9d3e579bc46f5e9fab12930289126b56d6787e53
}

export default SchedulingsList

