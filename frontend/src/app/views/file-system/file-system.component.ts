import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Archive } from '../../../../../common/models/Archive'; 

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {
  title = 'consultai';
  public formFiles!: FormGroup;

  constructor(private fb:FormBuilder) { 

  }
  getFile(){
    
  }
  submit(){
    this.formFiles.value.file_crm
  }
  ngOnInit(): void {
    this.formFiles = this.fb.group({
      file_crm: [''],
      file_obs: [''],
      file_description: [''],
      file_conteudo: [''],
    });
  }

}
