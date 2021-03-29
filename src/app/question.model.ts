export class Question{
    static userAnswer:Array<string> = new Array();
    constructor(public question:string, 
                public options:Array<string>,
                public correctAns:string ){}
    
}
