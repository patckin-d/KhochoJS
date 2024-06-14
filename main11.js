let question = document.getElementsByClassName("question")[0];

let arrayQuestions = [
    "Как выглядит Бог?",
    "Какого цвета Его румянец от поцелуев?",
    "Ты помнишь, как пахнет персик?"
]
let arrayAnswer = ["", "", ""];
let inputUs = document.getElementsByClassName("inputUser")[0];
let list = document.getElementsByClassName("list")[0];

function getList(){
    for( let i = 0; i < arrayQuestions.length; i++){
        let listElement = document.getElementsByClassName("answer-" + (i + 1))[0];
        listElement.textContent = arrayQuestions[i] + " : " + arrayAnswer[i];  
    }   
}

function findNotAnswered(callback){
    for (let i = 0; i <= arrayQuestions.length - 1; i++) {
        if (arrayAnswer[i] == ""){
            callback(i);
            break;
        }
    }
}

function changeQuestion() {
    findNotAnswered( i => question.textContent = arrayQuestions[i] )
}

function saveAnswer() {
    findNotAnswered(i => {
        arrayAnswer[i] = inputUs.value;
        inputUs.value = "";
        changeQuestion();
        showAnswerQuestions();
    })
}

function showAnswerQuestions(){
    let counter = 0; // количество неотвеченных
    arrayAnswer.forEach( (value,index,array) => {
        if(arrayAnswer[index] == ""){
            counter ++
        }  
    });

    if(counter == 0){
        list.classList.add("list-show");
    } else if( counter >=1){
    }
    console.log(counter);

    getList();
}






changeQuestion()

let btn = document.getElementsByClassName("btn")[0];
btn.onclick = saveAnswer;