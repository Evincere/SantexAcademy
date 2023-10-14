import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SurveyList } from 'src/app/interfaces/SurveyList';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SurveyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public survey: SurveyList[]
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.survey);
  }

}
