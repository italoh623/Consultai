import { analyzeAndValidateNgModules, NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Archive } from '../../../../../common/models/Archive'; 
import { PatientService } from '../home/patient/patient.service';
import { MedicalService } from '../home/medical/medical.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {
  title = 'consultai';
  public formFiles!: FormGroup;
  crm = '123'
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private medicalService: MedicalService, private patientService: PatientService) { 
  }
  /*
  preview(){
    
  }
  */
  submit(){
    if((<HTMLInputElement>document.getElementById('input')).files![0]){
      var imagem = (<HTMLInputElement>document.getElementById('input')).files![0];
      var file_description = this.formFiles.value.file_description;
      var file_obs = this.formFiles.value.file_obs;

      console.log(imagem.type);
      console.log(file_description);
      console.log(file_obs);
      alert('Arquivo enviado')
    }else{
      alert('Nenhum arquivo válido selecionado')
    }
  }
  ngOnInit(): void {
    this.formFiles = this.fb.group({
      file_obs: [''],
      file_description: ['']
    });
  }
}
