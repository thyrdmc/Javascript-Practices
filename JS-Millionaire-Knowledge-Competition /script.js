const competetion = new Competetion(questions);

const ui = new UI();

// ## Events

ui.btn_start.addEventListener("click", function(){

    ui.quiz_box.classList.add("active");

    ui.btn_next.classList.remove("show");

    ui.showQuestion(competetion.getQuestion());

    startTimer(10);
    startTimeline();

    ui.numberofQuestion(competetion.questionNumber+1, competetion.questions.length);
    
});

ui.btn_next.addEventListener("click", function(){

    if(competetion.questions.length != competetion.questionNumber + 1){

        ui.btn_next.classList.remove("show");

        competetion.questionNumber += 1;

        clearInterval(counter_timeline);
        clearInterval(counter);
        startTimer(10);
        startTimeline();

        ui.showQuestion(competetion.getQuestion());
        ui.numberofQuestion(competetion.questionNumber+1, competetion.questions.length);
    }
    else{
        clearInterval(counter_timeline);
        clearInterval(counter);

        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.showScore(competetion.questions.length, competetion.correctAnswer)
        console.log("game over");
    }
    
});

ui.btn_exit.addEventListener("click", function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function(){
    competetion.questionNumber = 0;
    competetion.correctAnswer = 0;

    ui.btn_start.click();
    ui.score_box.classList.remove("active");

});
// Functions


function optionSelected(opt){
    clearInterval(counter);
    clearInterval(counter_timeline);
    
    let answer = opt.querySelector("span b").textContent;
    let question = competetion.getQuestion();

    if (question.checkAnswer(answer)){

        competetion.correctAnswer += 1;

        opt.classList.add("correct");
        opt.insertAdjacentHTML("beforeend", ui.correct_icon);
    }

    else{
        opt.classList.add("incorrect");
        opt.insertAdjacentHTML("beforeend", ui.incorrect_icon);
    }

    ui.btn_next.classList.add("show");

    // Only choose one answer and later make disable to box
    for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }

}

let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);

    function timer(){
        ui.time_second.textContent = time;
        time -= 1;
        if(time < 0){
            clearInterval(counter);

            
            let question = competetion.getQuestion();

            for (let option of ui.option_list.children){

                let answer = option.querySelector("span b").textContent;

                if (question.checkAnswer(answer)){
                    console.log(option.querySelector("span b").textContent);
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correct_icon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counter_timeline;
function startTimeline(){
    let line_width = 0;
    counter_timeline = setInterval(timer, 20);

    function timer(){
        line_width+=1;
        ui.timeline.style.width = line_width + "px";

        if (line_width > 540){
            clearInterval(counter_timeline);
        }
    }
}

