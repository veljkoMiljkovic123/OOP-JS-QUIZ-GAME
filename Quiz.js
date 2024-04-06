class Quiz{
    questions;
    questionIndex=0;
    score=0;

    constructor(questions){
        this.questions=questions;
    }

    getQuestion(){
        let currentQuestion = this.questions[this.questionIndex]
        currentQuestion.options = Utils.randomize(currentQuestion.options)
        return currentQuestion;
    }

    userAnswer(answer){
        if(answer===this.getQuestion().answer){
            this.score+=this.getQuestion().points;
        }
        this.questionIndex++;
    }

    isEnd(){
        return this.questions.length === this.questionIndex;
    }

}

let quiz = new Quiz(questions); 
