const quizData = [
  {
    question: "Which character is a white cat with a red bow?",
    options: ["Hello Kitty", "My Melody", "Keroppi", "Chococat"],
    answer: "Hello Kitty",
    explanation: "Hello Kitty's red bow is an iconic part of her appearance, and it is often seen as a symbol of her cuteness and playfulness."
  },
  {
    question: "Who is a little penguin with a blue and white cap?",
    options: ["Pochacco", "Tuxedo Sam", "Badtz-Maru", "Patty & Jimmy"],
    answer: "Tuxedo Sam",
    explanation: "Sam is a plump blue and white penguin who wears a red bow tie and a round white sailor cap with a red ribbon."
  },
  {
    question: "Who was the founder of Sanrio?",
    options: ["Shintaro Tsuji", "Haruki Murakami", "Hayao Miyazaki", "Akira Kurosawa"],
    answer: "Shintaro Tsuji",
    explanation: "Mr. Tsuji is responsible for building one incredible cultural icon that has defined three decades of licensing, especially in the girls’ and young women’s market. He created an adorable kitty and other character “friends” based on a very simple and sweet look back in 1975."
  },
  {
    question: "Which was the first Sanrio character?",
    options: ["Kuromi", "Coro Chan", "Bad Badtz-Maru", "Cinnamoroll"],
    answer: "Coro Chan",
    explanation: "Coro Chan is one of the earliest known Sanrio characters, first appearing around 1973."
  },
  {
    question: "Which is the most popular Sanrio character, according to 2023 ''Sanrio Character Awards'' poll?",
    options: ["Hangyodon", "My Melody", "Pompompurin", "Cinnamoroll"],
    answer: "Cinnamoroll",
    explanation: "The beloved Sanrio character, who placed first for the fourth time in a row, was created by Miyuki Okumura and debuted in 2002."
  },
  {
    question: "What is Hello Kitty's nationality?",
    options: ["Japanese", "British", "Latvian", "American"],
    answer: "British",
    explanation: "Sanrio decided to make Hello Kitty British because foreign countries, in particular Britain, were trendy in Japan at the time of Hello Kitty's creation."
  },
  {
    question: "What species is Cinnamoroll?",
    options: ["Bunny", "Cat", "Dog", "Human"],
    answer: "Dog",
    explanation: "Cinnamoroll's ears are very big, so that's why some people think he looks like a rabbit even though he's a dog."
  },
  {
    question: "Who is Kuromi's rival?",
    options: ["My Melody", "Gudetama", "Cinnamoroll", "Chococat"],
    answer: "My Melody",
    explanation: "Kuromi is My Melody's self-proclaimed rival, while My Melody thinks of Kuromi as her close friend."
  },
  {
    question: "Which one is said to be the laziest Sanrio character?",
    options: ["Keroppi", "Gudetama", "Hello Kitty", "Aggretsuko"],
    answer: "Gudetama",
    explanation: "Gudetama can talk (in short sentences), move (more like wiggle), emote (only pain), and breathe (particularly when it sleeps). Though it can do these things and has the potential for more, it would rather not."
  }
  // Add more quiz data objects as needed
];

const quizContainer = document.getElementById('quiz-container'); // Correct the ID
const submitButton = document.getElementById('submit');
const goBackButton = document.getElementById('goBack');

function buildQuiz() {
  // Clear the existing content in the quiz container
  quizContainer.innerHTML = '';

  quizData.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<div>${index + 1}. ${data.question}</div>`;

    data.options.forEach((option) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question${index}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });
}


function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.question');
  let score = 0;

  quizData.forEach((data, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === data.answer) {
      score++;
      answerContainers[index].style.color = 'green';
    } else {
      answerContainers[index].style.color = 'red';
    }
  });

  // Display explanations for each question
  const explanationsContainer = document.getElementById('explanations');
  explanationsContainer.innerHTML = '';

  quizData.forEach((data, index) => {
    const explanationDiv = document.createElement('div');
    explanationDiv.innerHTML = `<p><strong>Question ${index + 1} Explanation:</strong> ${data.explanation}</p>`;
    explanationsContainer.appendChild(explanationDiv);
  });

  // Show the explanations container
  explanationsContainer.style.display = 'block';

  // Show the "Go Back" button
  goBackButton.style.display = 'block';

  // Hide the quiz container
  quizContainer.style.display = 'none';

  // Hide the submit button
  submitButton.style.display = 'none';

  alert(`You scored ${score} out of ${quizData.length}`);
}

function goBack() {
  // Hide the explanations container
  document.getElementById('explanations').style.display = 'none';

  // Show the quiz container
  quizContainer.style.display = 'block';

  // Show the submit button
  submitButton.style.display = 'block';

  // Hide the "Go Back" button
  goBackButton.style.display = 'none';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
goBackButton.addEventListener('click', goBack); // Add this line
