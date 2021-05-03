import { http } from './config'

interface Scheduling {
  id: string
    patientCPF: Number
    medicCRM: Number
    horario: Date
    created_at: Date
    updated_at: Date
}

export default {
  store: (scheduling: Scheduling) => {
    return http.post('scheduling', {
      scheduling
    })
  },
  index: () => {
    return http.get('tool/pontuando/list')
  },
  show: (id: string) => {
    return http.get(`scheduling/${id}`)
  }
}