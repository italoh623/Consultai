import MedicalAppointmentsList from "../lists/MedicalAppointmentsList"

class MedicalAppointmentService {
    private medicalAppointmentsList: MedicalAppointmentsList

    constructor(medicalAppointmentsList: MedicalAppointmentsList) {
        this.medicalAppointmentsList = medicalAppointmentsList
    }

    create() {}

    delete() {}

}

export default MedicalAppointmentService