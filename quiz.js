const quizData = [
    {
      question: "Which character is a white cat with a red bow?",
      options: ["Hello Kitty", "My Melody", "Keroppi", "Chococat"],
      answer: "Hello Kitty"
    },
    {
      question: "Who is a little penguin with a blue and white cap?",
      options: ["Pochacco", "Tuxedo Sam", "Badtz-Maru", "Patty & Jimmy"],
      answer: "Tuxedo Sam"
    },
    // Add more questions and answers here
  ];

  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');

  function buildQuiz() {
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

    alert(`You scored ${score} out of ${quizData.length}`);
  }

  buildQuiz();
  submitButton.addEventListener('click', showResults);
