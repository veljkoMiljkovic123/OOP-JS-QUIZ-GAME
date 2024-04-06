//kontrolise nasu stranicu

let options = document.querySelectorAll('.option')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')


 displayQuestion();

 function displayQuestion(){
    let currentQuestion = quiz.getQuestion();
    header.innerHTML=currentQuestion.text;
    footer.innerHTML=`Pitanje ${quiz.questionIndex+1}/${quiz.questions.length}`;

    for(let i = 0;i<options.length;i++){
        options[i].innerHTML=currentQuestion.options[i];
        options[i].onclick=userAnswer;

    }
 }

 function userAnswer(){
    quiz.userAnswer(this.innerHTML);
    if(!quiz.isEnd()){
        displayQuestion()
    }else{
        options.forEach(o=>o.style.display='none')
        main.innerHTML ="Score:"+ quiz.score+"/30";
        header.innerHTML="Zavrsili ste kviz."
    }
 }

 Utils.randomize([])