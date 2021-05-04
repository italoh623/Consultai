import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/services/doctor.service';
import { AppointmentFile } from '../../../../../common/models/AppointmentFile';
import { Patient } from '../../../../../common/models/Patient';
import { MedicalService } from '../home/medical/medical.service';
import { format, parseISO } from 'date-fns'
import { PatientService } from '../home/patient/patient.service';
import { ArchiveService } from '../file-system/file-system.service';
import { Archive } from '../../../../../common/models/Archive';
import { MatDialog } from '@angular/material/dialog';
import { FileSystemComponent } from '../file-system/file-system.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  patientId: string | null;
  patient: Patient;
  files: AppointmentFile[];
  cleanFiles: any[] = [];
  archives: Archive[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private medicalService: MedicalService, private patientService: PatientService, private archiveService: ArchiveService) {
    this.patientId = null
  }

  ngOnInit(): void {
   this.patientId = this.route.snapshot.paramMap.get('id');
   if (!this.patientId) { this.patientId = '' }
   this.getPatient(this.patientId)
   this.getFiles(this.patientId)
   this.getArchives(this.patientId)
  }

  getFiles(cpf: string) {
    this.medicalService.getPatientFiles(cpf)
      .subscribe(data => {
        this.files = data.map(({ patientCPF, medicCRM, consultaId, queixas, doencas, medicacoes, antecedentes, peso, altura, pressao_art, hipotese, conduta, created_at }) => {
          return new AppointmentFile(patientCPF, medicCRM, consultaId, queixas, doencas, medicacoes, antecedentes, peso, altura, pressao_art, hipotese, conduta, created_at);
        })
      })
      .add(() => {
        this.cleanUpFiles()
      });
  } 

  getPatient(cpf: string) {
    this.patientService.getPatient(cpf)
      .subscribe(data => {
        this.patient = new Patient(data.cpf, data.name, data.email, data.idade, data.created_at, data.updated_at)
        console.log(this.patient)
      })
  }

  cleanUpFiles() {
    this.files.map(async (f) => {
      let medName
      let medEspec
      this.medicalService.getMedical(f.medicCRM).subscribe(med => {
        medName = med.name;
        medEspec = med.especialidade;
        let file = {
          data: format(parseISO(String(f.created_at)), 'dd/MM/yyyy'),
          medicName: medName,
          medicEspec: medEspec
        }
        this.cleanFiles.push(file)
      })
    })
  }

  getArchives(cpf: string) {
    this.archiveService.getByCPF(cpf).subscribe(archive => {
        this.archives = archive.map(({id, crm, cpf, obs, description, conteudo, created_at, updated_at}) => {
          return new Archive(id, crm, obs, description, cpf, conteudo, format(parseISO(String(created_at)), 'dd/MM/yyyy'))
        })
      }
    )
  }

  openArchive() {
    const dialogRef = this.dialog.open(FileSystemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
