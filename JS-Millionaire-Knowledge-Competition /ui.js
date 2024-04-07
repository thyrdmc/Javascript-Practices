function UI(){
    this.btn_start = document.querySelector(".btn-start"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_next = document.querySelector(".btn-next"),
    this.btn_replay = document.querySelector(".btn-replay"),
    this.btn_exit = document.querySelector(".btn-exit"),
    this.option_list = document.querySelector(".option_list"),
    this.correct_icon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrect_icon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.timer_text = document.querySelector(".timer_text"),
    this.time_second = document.querySelector(".time_second"),
    this.timeline = document.querySelector(".timeline")
}


UI.prototype.showQuestion = function(question){
    let text = `<span>${question.question}</span>`;
    let options = '';

    for(let ans in question.answer){
        options += `
                <div class="option">
                    <span><b>${ans}</b>: ${question.answer[ans]}</span>
                </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = text;
    
    this.option_list.innerHTML = options;

    const opts = this.option_list.querySelectorAll(".option");
    
    for(let opt of opts){
        opt.setAttribute("onclick", "optionSelected(this)");
        // console.log(opt)
    }
}

UI.prototype.numberofQuestion = function(now, total){
    let tag =`<span class="badge bg-warning"> ${now}/${total} </span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function(totalQuestion, correctQuestion){
    let tag =`Score: ${correctQuestion}/${totalQuestion}`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}