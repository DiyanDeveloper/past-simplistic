// Question data for 27 students
const questions = [
  {
    id: 1,
    question: "She ____ (go) to the market yesterday.",
    type: "fill",
    answer: "went",
    feedback: "Correct! 'Go' is irregular: go → went → gone"
  },
  {
    id: 2,
    question: "They ____ (watch) a movie last night.",
    type: "fill",
    answer: "watched",
    feedback: "Correct! Regular verbs add -ed: watch → watched"
  },
  {
    id: 3,
    question: "He ____ (not finish) his homework.",
    type: "fill",
    answer: "didn't finish",
    alternatives: ["did not finish"],
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 4,
    question: "____ you ____ (see) the news this morning?",
    type: "fill",
    answer: "Did see",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 5,
    question: "We ____ (have) dinner at 7 PM yesterday.",
    type: "fill",
    answer: "had",
    feedback: "Correct! 'Have' is irregular: have → had → had"
  },
  {
    id: 6,
    question: "She ____ (write) a letter to her friend.",
    type: "fill",
    answer: "wrote",
    feedback: "Correct! 'Write' is irregular: write → wrote → written"
  },
  {
    id: 7,
    question: "Which sentence is correct?",
    type: "mcq",
    options: [
      "I eat breakfast an hour ago",
      "I eaten breakfast an hour ago",
      "I ate breakfast an hour ago",
      "I did ate breakfast an hour ago"
    ],
    answer: 2,
    feedback: "Correct! 'Ate' is the past simple of 'eat'"
  },
  {
    id: 8,
    question: "They ____ (not be) at school last Friday.",
    type: "fill",
    answer: "weren't",
    alternatives: ["were not"],
    feedback: "Correct! Past of 'to be': was/were"
  },
  {
    id: 9,
    question: "____ she ____ (drink) all the juice?",
    type: "fill",
    answer: "Did drink",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 10,
    question: "I ____ (give) him my book last week.",
    type: "fill",
    answer: "gave",
    feedback: "Correct! 'Give' is irregular: give → gave → given"
  },
  {
    id: 11,
    question: "Which is the past simple of 'take'?",
    type: "mcq",
    options: ["taked", "took", "taken", "tooked"],
    answer: 1,
    feedback: "Correct! 'Take' is irregular: take → took → taken"
  },
  {
    id: 12,
    question: "We ____ (sing) three songs at the party.",
    type: "fill",
    answer: "sang",
    feedback: "Correct! 'Sing' is irregular: sing → sang → sung"
  },
  {
    id: 13,
    question: "He ____ (not know) the answer.",
    type: "fill",
    answer: "didn't know",
    alternatives: ["did not know"],
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 14,
    question: "____ they ____ (win) the game?",
    type: "fill",
    answer: "Did win",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 15,
    question: "The children ____ (play) in the park all afternoon.",
    type: "fill",
    answer: "played",
    feedback: "Correct! Regular verbs add -ed: play → played"
  },
  {
    id: 16,
    question: "Which sentence is correct?",
    type: "mcq",
    options: [
      "She didn't went to school",
      "She didn't go to school",
      "She not went to school",
      "She no go to school"
    ],
    answer: 1,
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 17,
    question: "I ____ (see) that movie last year.",
    type: "fill",
    answer: "saw",
    feedback: "Correct! 'See' is irregular: see → saw → seen"
  },
  {
    id: 18,
    question: "She ____ (make) a delicious cake for the party.",
    type: "fill",
    answer: "made",
    feedback: "Correct! 'Make' is irregular: make → made → made"
  },
  {
    id: 19,
    question: "____ you ____ (find) your keys?",
    type: "fill",
    answer: "Did find",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 20,
    question: "They ____ (not understand) the lesson.",
    type: "fill",
    answer: "didn't understand",
    alternatives: ["did not understand"],
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 21,
    question: "Which is the past simple of 'bring'?",
    type: "mcq",
    options: ["bringed", "brang", "brought", "bought"],
    answer: 2,
    feedback: "Correct! 'Bring' is irregular: bring → brought → brought"
  },
  {
    id: 22,
    question: "He ____ (read) two books last month.",
    type: "fill",
    answer: "read",
    feedback: "Correct! 'Read' is irregular (pronounced 'red' in past)"
  },
  {
    id: 23,
    question: "We ____ (not have) time to finish.",
    type: "fill",
    answer: "didn't have",
    alternatives: ["did not have"],
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 24,
    question: "____ she ____ (tell) you the news?",
    type: "fill",
    answer: "Did tell",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 25,
    question: "The students ____ (study) hard for the test.",
    type: "fill",
    answer: "studied",
    feedback: "Correct! Regular verbs add -ed: study → studied"
  },
  {
    id: 26,
    question: "Which sentence is correct?",
    type: "mcq",
    options: [
      "I did my homework yesterday night",
      "I do my homework yesterday night",
      "I done my homework yesterday night",
      "I did did my homework yesterday night"
    ],
    answer: 0,
    feedback: "Correct! 'Did' is the past simple of 'do'"
  },
 {
  id: 27,
  question: "They ____ (forget) to call me.",
  type: "fill",
  answer: "forgot",
  feedback: "Correct! 'Forget' is irregular: forget → forgot → forgotten"
},  // ← THIS COMMA was missing
{
  id: 28,
  question: "The teacher ____ (speak) to us about history yesterday.",
    type: "fill",
    answer: "spoke",
    feedback: "Correct! 'Speak' is irregular: speak → spoke → spoken"
  },
  {
    id: 29,
    question: "Which is the past simple of 'choose'?",
    type: "mcq",
    options: ["choosed", "chose", "chosen", "choice"],
    answer: 1,
    feedback: "Correct! 'Choose' is irregular: choose → chose → chosen"
  },
  {
    id: 30,
    question: "We ____ (not be) ready for the test.",
    type: "fill",
    answer: "weren't",
    alternatives: ["were not"],
    feedback: "Correct! Past of 'to be': was/were"
  },
  {
    id: 31,
    question: "She ____ (wear) a beautiful dress to the party.",
    type: "fill",
    answer: "wore",
    feedback: "Correct! 'Wear' is irregular: wear → wore → worn"
  },
  {
    id: 32,
    question: "____ they ____ (build) this house themselves?",
    type: "fill",
    answer: "Did build",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 33,
    question: "I ____ (feel) sick after eating that food.",
    type: "fill",
    answer: "felt",
    feedback: "Correct! 'Feel' is irregular: feel → felt → felt"
  },
  {
    id: 34,
    question: "Which sentence is correct?",
    type: "mcq",
    options: [
      "He catched the ball",
      "He caught the ball",
      "He did caught the ball",
      "He catch the ball"
    ],
    answer: 1,
    feedback: "Correct! 'Catch' is irregular: catch → caught → caught"
  },
  {
    id: 35,
    question: "They ____ (not sleep) well last night.",
    type: "fill",
    answer: "didn't sleep",
    alternatives: ["did not sleep"],
    feedback: "Correct! Negative form: didn't + base verb"
  },
  {
    id: 36,
    question: "The sun ____ (shine) brightly all day.",
    type: "fill",
    answer: "shone",
    alternatives: ["shined"],
    feedback: "Correct! 'Shine' can be regular or irregular (shine → shone/shined)"
  },
  {
    id: 37,
    question: "____ you ____ (meet) anyone famous?",
    type: "fill",
    answer: "Did meet",
    feedback: "Correct! Questions: Did + subject + base verb"
  },
  {
    id: 38,
    question: "He ____ (lose) his keys on the way home.",
    type: "fill",
    answer: "lost",
    feedback: "Correct! 'Lose' is irregular: lose → lost → lost"
  },
  {
    id: 39,
    question: "Which is the past simple of 'tear'?",
    type: "mcq",
    options: ["teared", "tore", "torn", "tared"],
    answer: 1,
    feedback: "Correct! 'Tear' is irregular: tear → tore → torn"
  },
  {
    id: 40,
    question: "We ____ (not hear) the phone ring.",
    type: "fill",
    answer: "didn't hear",
    alternatives: ["did not hear"],
    feedback: "Correct! Negative form: didn't + base verb"
  }
];



// DOM Elements
const presentationSection = document.getElementById('presentation');
const exercisesSection = document.getElementById('exercises');
const resultsSection = document.getElementById('results');
const cardContainer = document.getElementById('card-container');
const questionContainer = document.getElementById('question-container');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const startBtn = document.querySelector('.start-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const checkBtn = document.querySelector('.check-btn');
const restartBtn = document.querySelector('.restart-btn');
const scoreDisplay = document.getElementById('score-display');

// State variables
let currentQuestionIndex = 0;
let userAnswers = Array(questions.length).fill(null);
let score = 0;

// Initialize the app
function init() {
  generateNumberCards();
  updateProgress();
}

// Generate the sticky note number cards
function generateNumberCards() {
  cardContainer.innerHTML = '';
  
  for (let i = 1; i <= 27; i++) {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.textContent = i;
    card.addEventListener('click', () => {
      currentQuestionIndex = i - 1;
      showQuestion();
      updateProgress();
    });
    cardContainer.appendChild(card);
  }
}

// Show selected question
function showQuestion() {
  cardContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  questionContainer.innerHTML = '';
  
  const question = questions[currentQuestionIndex];

  const questionCard = document.createElement('div');
  questionCard.className = 'question-card';

  const questionText = document.createElement('div');
  questionText.className = 'question-text';
  questionText.textContent = `${question.id}. ${question.question}`;
  questionCard.appendChild(questionText);

  const answerOptions = document.createElement('div');
  answerOptions.className = 'answer-options';

  if (question.type === 'fill') {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `q-${question.id}`;
    input.value = userAnswers[currentQuestionIndex] || '';
    answerOptions.appendChild(input);
  } else if (question.type === 'mcq') {
    const radioGroup = document.createElement('div');
    radioGroup.className = 'radio-group';
    
    question.options.forEach((option, i) => {
      const radioDiv = document.createElement('div');
      radioDiv.className = 'radio-option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.id = `q-${question.id}-opt-${i}`;
      radio.name = `q-${question.id}`;
      radio.value = i;
      if (userAnswers[currentQuestionIndex] === i.toString()) {
        radio.checked = true;
      }
      
      const label = document.createElement('label');
      label.htmlFor = `q-${question.id}-opt-${i}`;
      label.textContent = option;
      
      radioDiv.appendChild(radio);
      radioDiv.appendChild(label);
      radioGroup.appendChild(radioDiv);
    });
    
    answerOptions.appendChild(radioGroup);
  }

  questionCard.appendChild(answerOptions);
  questionContainer.appendChild(questionCard);

  // Show feedback if available
  if (userAnswers[currentQuestionIndex] !== null && checkBtn.classList.contains('hidden')) {
    showFeedback();
  }

  // Update button states
  updateButtonStates();
}

// Update progress bar and text
function updateProgress() {
  progressBar.value = currentQuestionIndex + 1;
  progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

// Update navigation button states
function updateButtonStates() {
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === questions.length - 1;
  
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.classList.add('hidden');
    checkBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    checkBtn.classList.add('hidden');
  }
}

// Save user answer
function saveAnswer() {
  const question = questions[currentQuestionIndex];
  let answer;

  if (question.type === 'fill') {
    const input = document.querySelector(`#q-${question.id}`);
    answer = input ? input.value.trim() : '';
  } else if (question.type === 'mcq') {
    const selected = document.querySelector(`input[name="q-${question.id}"]:checked`);
    answer = selected ? selected.value : null;
  }

  userAnswers[currentQuestionIndex] = answer;
}

// Show feedback for current question
function showFeedback() {
  const question = questions[currentQuestionIndex];
  const feedback = document.createElement('div');
  feedback.className = 'feedback';
  
  if (isAnswerCorrect(currentQuestionIndex)) {
    feedback.textContent = question.feedback;
    feedback.classList.add('correct');
  } else {
    let correctAnswer = question.answer;
    if (question.type === 'mcq') {
      correctAnswer = question.options[question.answer];
    } else if (question.alternatives) {
      correctAnswer = `${question.answer} (or ${question.alternatives.join(', ')})`;
    }
    feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    feedback.classList.add('incorrect');
  }
  
  const questionCard = document.querySelector('.question-card');
  questionCard.appendChild(feedback);
}

// Check if answer is correct
function isAnswerCorrect(index) {
  const question = questions[index];
  const userAnswer = userAnswers[index];
  
  if (userAnswer === null) return false;
  
  if (question.type === 'fill') {
    const possibleAnswers = [question.answer.toLowerCase()];
    if (question.alternatives) {
      question.alternatives.forEach(alt => possibleAnswers.push(alt.toLowerCase()));
    }
    return possibleAnswers.includes(userAnswer.toLowerCase());
  } else if (question.type === 'mcq') {
    return parseInt(userAnswer) === question.answer;
  }
  
  return false;
}

// Calculate and show results
function showResults() {
  score = userAnswers.reduce((acc, answer, index) => {
    return acc + (isAnswerCorrect(index) ? 1 : 0);
  }, 0);
  
  const percentage = Math.round((score / questions.length) * 100);
  let message = '';
  
  if (percentage >= 90) {
    message = `Excellent! You got ${score}/${questions.length} (${percentage}%) <div class="star-rating">★★★★★</div>`;
  } else if (percentage >= 70) {
    message = `Good job! You got ${score}/${questions.length} (${percentage}%) <div class="star-rating">★★★★☆</div>`;
  } else if (percentage >= 50) {
    message = `Not bad! You got ${score}/${questions.length} (${percentage}%) <div class="star-rating">★★★☆☆</div>`;
  } else {
    message = `Keep practicing! You got ${score}/${questions.length} (${percentage}%) <div class="star-rating">★★☆☆☆</div>`;
  }
  
  scoreDisplay.innerHTML = message;
  exercisesSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');
}

// Return to card view
function returnToCards() {
  saveAnswer();
  cardContainer.classList.remove('hidden');
  questionContainer.classList.add('hidden');
}

// Event Listeners
startBtn.addEventListener('click', () => {
  presentationSection.classList.add('hidden');
  exercisesSection.classList.remove('hidden');
  init();
});

prevBtn.addEventListener('click', () => {
  saveAnswer();
  currentQuestionIndex--;
  showQuestion();
  updateProgress();
});

nextBtn.addEventListener('click', () => {
  saveAnswer();
  currentQuestionIndex++;
  showQuestion();
  updateProgress();
});

checkBtn.addEventListener('click', () => {
  saveAnswer();
  showFeedback();
  setTimeout(showResults, 1500);
});

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  userAnswers = Array(questions.length).fill(null);
  score = 0;
  
  resultsSection.classList.add('hidden');
  exercisesSection.classList.remove('hidden');
  init();
  cardContainer.classList.remove('hidden');
  questionContainer.classList.add('hidden');
});

// Initialize first view
presentationSection.classList.remove('hidden');
exercisesSection.classList.add('hidden');
resultsSection.classList.add('hidden');
// Update generateNumberCards() to create 40 cards
function generateNumberCards() {
  cardContainer.innerHTML = '';
  
  for (let i = 1; i <= 40; i++) {  // Changed from 27 to 40
    const card = document.createElement('div');
    card.className = 'number-card';
    card.textContent = i;
    card.addEventListener('click', () => {
      currentQuestionIndex = i - 1;
      showQuestion();
      updateProgress();
    });
    cardContainer.appendChild(card);
  }
}

// Update initialization of userAnswers array
let userAnswers = Array(questions.length).fill(null); // Now handles 40 items
