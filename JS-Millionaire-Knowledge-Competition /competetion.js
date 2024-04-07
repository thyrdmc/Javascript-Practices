// ## Quiz Class 
function Competetion(questions){
    this.questions = questions;
    this.questionNumber = 0;
    this.correctAnswer = 0;
}

// # Quiz Class Method
Competetion.prototype.getQuestion = function(){
    return this.questions[this.questionNumber];
}
