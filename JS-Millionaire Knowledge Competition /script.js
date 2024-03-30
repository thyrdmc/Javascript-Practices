// ## Question Class 
function Question(question, answer, correct_answer){
    this.question = question;
    this.answer = answer;
    this.correct_answer = correct_answer;
}

// # Question Class Method
Question.prototype.checkAnswer = function(input){
    return input === this.correct_answer;
}

let questions = [
    new Question("1-Question 1", {a: "A", b:"B", c:"C",}, "c"),
    new Question("2-Question 2", {a: "A", b:"B", c:"C",}, "b"),
    new Question("3-Question 3", {a: "A", b:"B", c:"C",}, "a"),
];

// ## Quiz Class 
function Competetion(questions){
    this.questions = questions;
    this.questionNumber = 0;
}

// # Quiz Class Method
Competetion.prototype.getQuestion = function(){
    return this.questions[this.questionNumber];
}

const competetion = new Competetion(questions);


document.querySelector(".btn-start").addEventListener("click", function(){

    if(competetion.questions.length != competetion.questionNumber){
        document.querySelector(".quiz_box").classList.add("active");
        console.log(competetion.getQuestion());
        competetion.questionNumber += 1;
    }
    else{
        console.log("game over");
    }
    
})