import MedicsList from "../lists/MedicsList";
import PatientsList from "../lists/PatientsList";
import SchedulingsList from "../lists/SchedulingsList";

export default class MedicService {
    private schedulingsList: SchedulingsList
    private patientsList: PatientsList
    private medicsList: MedicsList

    constructor(schedulingsList: SchedulingsList, patientsList: PatientsList, medicsList: MedicsList) {
        this.schedulingsList = schedulingsList
        this.patientsList = patientsList
        this.medicsList = medicsList
    }

    getPatients(crm: string) {
        const schedules = this.schedulingsList.findAllByCRM(crm)
        let patients = []

        for(let s in schedules) {
            let p = this.patientsList.findByCpf(schedules[s].patientCPF)
            if(p) {
                patients.push(p)
            }
        }

        return patients
    }

    filtrarPorEspecialidade(especialidade: string) {
        const medicOfSpeciality = this.medicsList.findBySpeciality(especialidade)
        console.log(medicOfSpeciality)

        return medicOfSpeciality
    }

    getSchedules(crm: string) {
        const schedules = this.schedulingsList.findAllByCRM(crm)

        return schedules
    }
}

