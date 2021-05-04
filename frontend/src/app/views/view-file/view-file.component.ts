import { Component, OnInit } from '@angular/core';
import { Archive } from '../../../../../common/models/Archive';
import { ArchiveService } from '../file-system/file-system.service';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit {

  fileId: string
  file: Archive

  constructor(private archiveService: ArchiveService) { }


  ngOnInit(): void {
    this.archiveService.getById(this.fileId).subscribe(data => {
      this.file = data
      console.log(this.file)
    })
  }



}
