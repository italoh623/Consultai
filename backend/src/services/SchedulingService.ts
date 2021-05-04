import MedicsList from '../lists/MedicsList'
import SchedulingList from '../lists/SchedulingsList'
import PatientsList from'../lists/PatientsList'
import Medic from '../models/Medic'
import Patient from '../models/Patient'
import { format, getDaysInMonth, getDate, getHours, isAfter, parseISO } from 'date-fns'
import Scheduling from '../models/Scheduling'
// import Scheduling from '../models/Scheduling'

interface Request {
    medicCRM: string
    date: string 
}

type ResponseMonth = Array<{
    dia: number
    disponivel: boolean
  }>


  type ResponseDay = Array<{
    hora: number
    disponivel: boolean
  }>

class SchedulingService {
    private schedulingList: SchedulingList
    private medicsList: MedicsList
    private patientsList: PatientsList


    constructor(schedulingList: SchedulingList, medicsList: MedicsList, patientsList: PatientsList) {
        this.schedulingList = schedulingList
        this.medicsList = medicsList
        this.patientsList = patientsList
    }

    agendar(horario: Date, patientCPF: string, medicCRM:string) {
        // métodos de procura para alocar uma consulta precisam ser criados ainda
        const getAllSchedule = this.schedulingList.findAllByCPF(patientCPF)

        const existentSchedule = getAllSchedule.some(schedule => schedule.medicCRM === medicCRM)

        if(existentSchedule) {
            throw new Error('You already booked one schedule with this doctor.')
        }
        
        const schedule = this.schedulingList.create(horario, patientCPF, medicCRM)

        return schedule
    }
    
    getMedic(medicCRM: string) {
        const medic = this.medicsList.findByCrm(medicCRM)

        return medic
    }
    getAll() {
        const medics = this.medicsList.getAll()
        return medics
    }

    findAllByCrm(medicCRM: string): Scheduling[] {
        const schedules = this.schedulingList.findAllByCRM(medicCRM)

        return schedules
    }

    findAllByCPF(pacientCPF: string): Scheduling[] {
        const schedules = this.schedulingList.findAllByCPF(pacientCPF)

        return schedules
    }

    filtrarPorEspecialidade(especialidade: string): Medic[] {
        const medicOfSpeciality = this.medicsList.findBySpeciality(especialidade)

        return medicOfSpeciality
    }

    getConsultasPaciente(cpf: string): Scheduling[]{
        const schedules = this.schedulingList.findAllByCPF(cpf)
        console.log(schedules)
        return schedules
    }


    filtrarDisponibilidadePorMes({ medicCRM, date }: Request): ResponseMonth {
        const parsedDate = parseISO(date)
        
        const formatedDate = format(parsedDate, 'MM/yyyy')
        
        const schedule = this.schedulingList.findAllByCRM(medicCRM)
        // console.log(schedule)
        const scheduleDisponiveis = schedule.filter(sch => format(sch.horario, 'MM/yyyy') === formatedDate)

        const [mes, ano] = formatedDate.split('/')

        const numberOfDaysInMonth = getDaysInMonth(new Date(Number(ano), Number(mes)-1))

        const eachDayArray = Array.from(
            { length: numberOfDaysInMonth },
            (_, index) => index + 1,
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

    filtrarDisponibilidadePorDia({ medicCRM, date }: Request): ResponseDay {
        const parsedDate = parseISO(date)

        const formatedDate = format(parsedDate, 'dd/MM/yyyy')

        const schedule = this.schedulingList.findAllByCRM(medicCRM)
        // console.log(schedule)
        const scheduleDisponiveis = schedule.filter(sch => format(sch.horario, 'dd/MM/yyyy') === formatedDate)

        const hourStart = 8

        const [dia, mes, ano] = formatedDate.split('/')
        // console.log({ dia, mes, ano })
        
        const eachHourArray = Array.from(
            { length: 10 },
            (_, index) => index + hourStart,
        )

        const disponibilidade = eachHourArray.map(hora => {
            const hasAppointmentsInHour = scheduleDisponiveis.find(schedule => {
                return getHours(schedule.horario) === hora
            })

            const currentDate = new Date(Date.now())
            const compareDate = new Date(Number(ano), Number(mes)-1, Number(dia), hora)
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
