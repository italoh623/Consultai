import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  patientId: string | null;

  constructor(private route: ActivatedRoute) {
    this.patientId = null
  }

  ngOnInit(): void {
   this.patientId = this.route.snapshot.paramMap.get('id');
   console.log(this.patientId);
  }

}
