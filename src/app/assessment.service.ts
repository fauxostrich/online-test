import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question.model'

@Injectable({
    providedIn: 'root'
})
export class AssessmentSerivce{
    constructor(public http:HttpClient){}

    loadQuestionsInfo():Observable<Question[]>{
        return this.http.get<Question[]>("/assets/question.json")
    }
}