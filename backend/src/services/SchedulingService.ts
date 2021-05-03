import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingList from '../lists/SchedulingsList'
import Medic from '../models/Medic'
import Patient from '../models/Patient'


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
    filtrarDisponibilidadeMedico(medicCRM:string): Medic[] {
        const medicDisponibility= this.medicsList.findBySpeciality(medicCRM)

        return medicDisponibility
    }

    cancelar(id: string):void {
        this.schedulingList.remove(id)
    }
 }

export default SchedulingService