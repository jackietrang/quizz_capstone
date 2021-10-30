const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

var answer = document.getElementById("...")

var questions = [
  {
    question:
      "Do you know what to expect when dealing with any cryptocurrency?",
    imgSrc:
      "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2FCryptocurrency-Bitcoins.jpeg?v=1635605958402",
    choiceA: "Yes, its value will fluctuate, but will go up in the long-run",

    choiceB: "Not really",

    choiceC: "Yes, its value will go up at least due to inflation",

    choiceD: "Yes, it will always go up due to high demand",

    correct: "C"
  },
  {
    question: "Which of these is not a spending practice of financially successful people?",
    imgSrc:
      "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2FFinancial-Growth.png?v=1635606152758",

    choiceA: "Focusing on the long-term",

    choiceB: "Saving the money that’s left over at the end of the month",

    choiceC: "Living frugally",

    correct: "B"
  },
  {
    question:
      "A broker advises you to invest in ABC Corp, which she owns. Is she acting as your fiduciary?",
    imgSrc: "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2FBroker.jpeg?v=1635606221441",
    choiceA: "Yes, because she owns the stock",

    choiceB: "No, there is a conflict of interest",

    choiceC: "Yes, because she is a broker",
    choiceD: "Yes, because ABC Corp is profitable",

    correct: "B"
  },
  {
    question:
      "A profit is a positive return",
    imgSrc:
      "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2Fprofit-20171124013205135.jpeg?v=1635606670505",

    choiceA: "True",
    choiceB: "False",
  
    correct: "A"
  },
  {
    question:
      "Which of the following is an example of an equity calculation?",
    imgSrc:
      "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2Fequity.jpeg?v=1635606799552",
    choiceA: "($200,000 main residence) + (($100,000 main residence loan)",
    choiceB: "($200,000 main residence) - (($100,000 saving)",
    choiceC: "($200,000 main residence) - (($100,000 main residence loan)",
    choiceC: "($200,000 main residence)",
    correct: "C"
  },
  {
    question:
      "If a person dies intestate and no relatives are found, the assets go to:",
    imgSrc:
      "https://cdn.glitch.me/d28052bc-296a-4014-84f9-de6bfc690091%2Finherit.jpeg?v=1635606841695",

    choiceA: "Charity",
    choiceB: "The state",
    choiceC: "A time period during which no finance charges will be added to your account",
    choiceD: "The person’s closest friend",

    correct: "B"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
const questionTime = 20; // 30s
let count = questionTime;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";

  choiceA.innerHTML = q.choiceA ;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    var test
    test ++
    console.log(test)
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
//   renderCounter();
//   TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// function renderCounter() {
//   if (count<= questionTime) {
//     counter.innerHTML = count;
//     timeGauge.style.width = count * gaugeUnit + "px";
//     //       count backward
//     count = count + 1;
//   } else {
//       count = 0;
//       answerIsWrong();

//       if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         clearInterval(TIMER);
//         scoreRender();
//     }
    
//   }
// }



// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
//     html HYPERLINK href="index1.html"
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  // count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

// choose level based on price person
let text =
    scorePerCent <= 60
        ?  "You should start from <a href = './knowledge_flashcard/knowledge1.html'>Consumer Credit flashcards</a> to gain a stronger foundation"
    : "You seem to have a good foundation. You can start the <a href = 'level1_consumer_credit.html'> Consumer Credit quiz</a>.";
  scoreDiv.innerHTML += "<div class='level-rec'>" + text + "</div>";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

}
