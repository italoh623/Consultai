import MedicsList from '../lists/MedicsList'
import SchedulingList from '../lists/SchedulingsList'
import Medic from '../models/Medic'


class SchedulingService {
    private schedulingList: SchedulingList
    private medicsList: MedicsList

    constructor(schedulingList: SchedulingList) {
        this.schedulingList = schedulingList
        this.medicsList = MedicsList.getInstance()
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
 }

export default SchedulingService