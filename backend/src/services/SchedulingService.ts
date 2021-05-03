import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingList from '../lists/SchedulingsList'
import Medic from '../models/Medic'
import Patient from '../models/Patient'


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
        const schedule = this.schedulingList.create(horario, patientCPF, medicCRM)

        return schedule
    }
    
    filtrarPorEspecialidade(especialidade: string): Medic[] {
        const medicOfSpeciality = this.medicsList.findBySpeciality(especialidade)

        return medicOfSpeciality
    }

    cancelar(id: string):void {
        this.schedulingList.remove(id)
    }

    getPatientsByCRM(crm: string) {
        const schedules = this.schedulingList.findAllByCRM(crm)
        let patients = []

        for(let s in schedules) {
            let p = this.patientsList.findByCpf(schedules[s].patientCPF)
            if(p) {
                patients.push(p)
            }
        }

        return patients
    }
 }

export default SchedulingService