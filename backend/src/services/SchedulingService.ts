import SchedulingList from '../lists/SchedulingsList'


/* TODO
    * [] Checar se o médico já tem uma consulta nesse horário
*/

class SchedulingService {
    private schedulingList: SchedulingList

    constructor(schedulingList: SchedulingList) {
        this.schedulingList = schedulingList
    }

    agendar(horario: Date, patientCPF: string, medicCRM:string) {
        // métodos de procura para alocar uma consulta precisam ser criados ainda
        const schedule = this.schedulingList.create(horario, patientCPF, medicCRM)

        return schedule
    }

    cancelar(id: string):void {
        this.schedulingList.remover(id)
    }

    listar(): void {
        this.schedulingList.getAll()
    }
 }

export default SchedulingService