// scripts.js
// Import quiz data from quiz.js
import { quizData } from './quiz.js';

// Function to generate quiz elements
function generateQuiz() {
  const quizContainer = document.getElementById("quiz-container");

  quizData.forEach((quizItem, index) => {
    const quizElement = document.createElement("div");
    quizElement.classList.add("question");

    // Create HTML content based on quiz data
    quizElement.innerHTML = `
      <p>${quizItem.question}</p>
      <ul>
        ${quizItem.options.map(
          (option) => `<li><label><input type="radio" name="question${index}" value="${option}">${option}</label></li>`
        ).join("")}
      </ul>
    `;

    quizContainer.appendChild(quizElement);
  });
}

// Function to show results and explanations
function showResults() {
  const answerContainers = document.querySelectorAll(".question");
  let score = 0;

  quizData.forEach((data, index) => {
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (document.querySelector(selector) || {}).value;

    if (userAnswer === data.answer) {
      score++;
      answerContainers[index].style.color = 'green';
    } else {
      answerContainers[index].style.color = 'red';
    }
  });

  // Display explanations for each question (customize this part)
  // For simplicity, I'm just logging explanations to the console
  quizData.forEach((data, index) => {
    console.log(`Question ${index + 1} Explanation: ${data.explanation}`);
  });

  // Show the user's score (customize this part)
  alert(`You scored ${score} out of ${quizData.length}`);
}

// Call the function to generate the quiz elements after the DOM has loaded
document.addEventListener("DOMContentLoaded", generateQuiz);

// Attach the showResults function to a submit button (customize this part)
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showResults);
