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