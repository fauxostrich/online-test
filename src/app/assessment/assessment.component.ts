import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { AssessmentSerivce } from '../assessment.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  questions:Array<Question> = [];
  valid:boolean = false;
  constructor(public qService:AssessmentSerivce, public router:Router) { }

  ngOnInit(): void {
    this.qService.loadQuestionsInfo().subscribe(result=>this.questions=result);
  }

  reroute()
  {
    var radios = document.getElementsByTagName("input");
    var j = 0;
    for(var i = 0; i < radios.length; i++)
    {
      if(radios[i].checked)
        Question.userAnswer.push(radios[i].id);
   
    }
    this.router.navigate(["submission"]);
  }
}
