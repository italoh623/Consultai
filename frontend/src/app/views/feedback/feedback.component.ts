import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public formFeedback: FormGroup;
  private rating: string;
  private consultaId: string | null;

  ratings: string[] = ['Ruim', 'Regular', 'Bom', 'Ótimo'];

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.consultaId = this.route.snapshot.paramMap.get('id');
    if (!this.consultaId) { this.consultaId = '' }
    console.log(this.consultaId)
    this.formFeedback = this.fb.group({
      descricao: [""],
      avaliacao: [""]
    })
  }

  enviar(): void {
    this.formFeedback.value['rating'] = this.rating
    this.formFeedback.value['consultaId'] = this.consultaId
    console.log(this.formFeedback.value)
    this.feedbackService.enviarEmail(this.formFeedback.value)
      .subscribe(data => {
        console.log(data)
      })
  }

  changeRating(value: string) {
    this.rating = value
    console.log(this.rating)
  }

}
