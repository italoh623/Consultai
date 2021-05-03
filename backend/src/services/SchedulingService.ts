import MedicsList from '../lists/MedicsList'
// import PatientsList from '../lists/PatientsList'
import SchedulingList from '../lists/SchedulingsList'
import Medic from '../models/Medic'
// import Patient from '../models/Patient'
import { format, getDaysInMonth, getDate, getHours, isAfter } from 'date-fns'
// import Scheduling from '../models/Scheduling'

interface RequestMonth {
    medicCRM: string
    mes: number
    ano: number
}

type ResponseMonth = Array<{
    dia: number
    disponivel: boolean
  }>

  interface RequestDay {
    medicCRM: string
    dia: number
    mes: number
    ano: number
}

  type ResponseDay = Array<{
    hora: number
    disponivel: boolean
  }>

class SchedulingService {
    private schedulingList: SchedulingList
    private medicsList: MedicsList

    constructor(schedulingList: SchedulingList, medicsList: MedicsList) {
        this.schedulingList = schedulingList
        this.medicsList = medicsList
    }

    agendar(horario: Date, patientCPF: string, medicCRM:string) {
        // métodos de procura para alocar uma consulta precisam ser criados ainda
        const schedule = this.schedulingList.create(horario, patientCPF, medicCRM)

        return schedule
    }
    
    filtrarPorEspecialidade(especialidade: string): Medic[] {
        const medicOfSpeciality = this.medicsList.findBySpeciality(especialidade)

        return medicOfSpeciality
    }

    filtrarDisponibilidadePorMes({ medicCRM, mes, ano }: RequestMonth): ResponseMonth {
        const parsedMes = String(mes).padStart(2, '0')

        const schedule = this.schedulingList.findAllByCRM(medicCRM)
        // console.log(schedule)
        const scheduleDisponiveis = schedule.filter(sch => format(sch.horario, 'MM/yyyy') === (`${parsedMes}/${ano}`))

        const numberOfDaysInMonth = getDaysInMonth(new Date(ano, mes-1))

        const eachDayArray = Array.from(
            { length: numberOfDaysInMonth },
            (_, index) => index +1,
        )

        const disponibilidade = eachDayArray.map(dia => {
            const appointmentsInDay = scheduleDisponiveis.filter(schedule => {
                return getDate(schedule.horario)=== dia
            })

            return {
                dia,
                disponivel: appointmentsInDay.length < 10 // 8-17h por exemplo
            }
        })
            
        return disponibilidade
    }

    filtrarDisponibilidadePorDia({ medicCRM, dia, mes, ano }: RequestDay): ResponseDay {
        const parsedDia = String(dia).padStart(2, '0')
        const parsedMes = String(mes).padStart(2, '0')

        const schedule = this.schedulingList.findAllByCRM(medicCRM)
        // console.log(schedule)
        const scheduleDisponiveis = schedule.filter(sch => format(sch.horario, 'dd/MM/yyyy') === (`${parsedDia}/${parsedMes}/${ano}`))

        const hourStart = 8

        const eachHourArray = Array.from(
            { length: 10 },
            (_, index) => index + hourStart,
        )

        const disponibilidade = eachHourArray.map(hora => {
            const hasAppointmentsInHour = scheduleDisponiveis.find(schedule => {
                return getHours(schedule.horario)=== hora
            })

            const currentDate = new Date(Date.now())
            const compareDate = new Date(ano, mes-1, dia, hora)
            // console.log(compareDate)

            return {
                hora,
                disponivel: !hasAppointmentsInHour && isAfter(compareDate, currentDate)
            }
        })
            
        return disponibilidade
    }

    cancelar(id: string):void {
        this.schedulingList.remove(id)
    }
 }

export default SchedulingService