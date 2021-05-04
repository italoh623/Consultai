import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public formFeedback: FormGroup;

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.formFeedback = this.fb.group({
      feedbackInput: [""],
      FeedbackDescription: [""]
    })
  }

  enviar(): void {
    console.log(this.formFeedback.value)

    this.feedbackService.enviarEmail(this.formFeedback.value)
      .subscribe(data => {
        console.log(data)
      })
  }

}
