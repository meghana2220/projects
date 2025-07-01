const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to link CSS?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    answer: "<link>"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Styling Software",
      "Computer Styled Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is the use of <div> tag in HTML?",
    options: [
      "To create a paragraph",
      "To make text bold",
      "To divide blocks",
      "To link pages"
    ],
    answer: "To divide blocks"
  }
];

let currentIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const currentQuestion = questions[currentIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentIndex].answer;
  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#a1e6a1";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#f9b5b5";
    }
  });

  if (selected === correct) score++;

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.style.display = "none";
  optionsContainer.style.display = "none";
  nextBtn.style.display = "none";
  scoreContainer.classList.remove("hide");
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}

showQuestion();

