import { Component, OnInit } from '@angular/core';
import { AssessmentSerivce } from '../assessment.service'
import { Question } from '../question.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})

export class SubmissionComponent implements OnInit {
  correctlyAnswered:Array<Question>=[];
  userAns:Array<string> = Question.userAnswer;
  questions:Array<Question>=[];
  constructor(public qService:AssessmentSerivce, public router:Router) { 
    this.qService.loadQuestionsInfo().subscribe(result=>this.questions=result);
    this.qService.loadQuestionsInfo().subscribe(result=>this.grader(result));
  }
  grader(result:any){
    var numOfQ = result.length;
    var numRight = 0;

    for(var i = 0; i < result.length; i++)
    {
      let q = result[i].question + "<br/>";
      let a = "Correct Answer: " + result[i].correctAns + "<br/>";
      let ua= " Your Answer: " + Question.userAnswer[i]+ "<br/>";
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      if(Question.userAnswer[i] === result[i].correctAns)
      {
        let result = (q + a + ua).fontcolor("green");
        document.write(result);
        card.innerHTML = result;
        numRight++;
      }
      else
      {
        let result = (q + a + ua).fontcolor("red");
        document.write(result);
       
      }
      document.write("<hr/>")
      document.write("<br/>");
     
    }

    var score = "Total Score: " + numRight + "/" + numOfQ;
    let percentange = (numRight/(numOfQ*1.0)) * 100;
    console.log(percentange);
    if( percentange >= 80 )
      document.write(score.fontcolor("green"));
    else if ( percentange <= 79 && percentange >= 60 )
      document.write(score.fontcolor("darkgoldenrod"));
    else
      document.write(score.fontcolor("red"));
    
    

  }

  ngOnInit(): void {
  }

}
