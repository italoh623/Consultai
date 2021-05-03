import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/services/doctor.service';
import { Patient } from '../../../../../common/models/Patient';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  patientId: string | null;
  patients: any;

  constructor(private route: ActivatedRoute, doctorService: DoctorService) {
    this.patientId = null
  }

  ngOnInit(): void {
   this.patientId = this.route.snapshot.paramMap.get('id');
  }

}
