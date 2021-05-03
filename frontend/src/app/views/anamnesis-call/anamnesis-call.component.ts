import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-anamnesis-call',
  templateUrl: './anamnesis-call.component.html',
  styleUrls: ['./anamnesis-call.component.scss']
})
export class AnamnesisCallComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppointmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

