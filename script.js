
const questions = [
    {
        question: "Who is father of Java?",
        options: ["Dennis Ritchie", "James Gosling", "Guido Van Rossum", "Bjarne Stroustrup"],
        correctAnswer: "James Gosling"
    },
    {
        question: "Which planet in the Milky way is hottest?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Which company was originally called Cadabra? ",
        options: ["Flipkart", "Amazon", "Meesho", "Ajio"],
        correctAnswer: "Amazon"
    },
    {
        question: "Which is the only continent with land in all four hemispheres? ",
        options: ["Africa", "Europe", "Asia", "India"],
        correctAnswer: "Africa"
    },
    {
        question: "Which is the capital of Canada? ",
        options: ["Wellington", "Imphal", "Brussels", "Ottawa"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Which is the following is a non-metal that remains liquid at room temperature? ",
        options: ["Bromine", "Phosphorous", "Helium", "Chlorine"],
        correctAnswer: "Bromine"
    },
    {
        question: "Which is the most electro-negative element among the following? ",
        options: ["Sodium", "Oxygen", "Bromine", "Fluorine"],
        correctAnswer: "Fluorine"
    },
    {
        question: "What is the part of database that holds only one type of information? ",
        options: ["Report", "Field", "Record", "File"],
        correctAnswer: "Field"
    },
    {
        question: "Which  was the 1st non test playing country to beat India in an International match? ",
        options: ["Sri Lanka", "East Africa", "Canada", "Zimbabwe"],
        correctAnswer: "Sri Lanka"
    },
    {
        question: "Pink Ladies and Granny Smiths are types of what fruits? ",
        options: ["Banana","Orange", "Kiwi", "Apples"],
        correctAnswer: "Apples"
    },



];

// Variable to track whether the quiz has been submitted
let isQuizSubmitted = false;

// Variables to keep track of the current question and user's score
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const scoreCard = document.getElementById("score-card");
const scoreElement = document.getElementById("score");
const correctAnswersElement = document.getElementById("correct-answers");
const dashbord = document.getElementById("dashbord")

// Previous and Next buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Array to store the selected options for each question
const selectedOptions = new Array(questions.length).fill(null);

// Function to update the selected option when a button is clicked
function updateSelectedOption(optionValue) {
    selectedOptions[currentQuestionIndex] = optionValue;
}

// Event listeners for Next and Previous buttons
prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});


// Event listener for the form submission


// Event listener for the form submission
document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Check if the quiz has already been submitted
    if (isQuizSubmitted) {
        return; // Do nothing if the quiz has already been submitted
    }

    // Check if all questions have been answered
    if (selectedOptions.every(option => option !== null)) {
        const confirmSubmission = window.confirm("Are you sure you want to submit your answers?");
        if (confirmSubmission) {
            // Calculate the score and display the score card
            score = calculateScore();
            displayScoreCard();
            isQuizSubmitted = true; // Set the quiz as submitted
        }
    }
});



// Function to load and display the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;

        // Check if this option was previously selected
        if (selectedOptions[currentQuestionIndex] === option) {
            optionButton.classList.add("selected");
        }

        // Attach an event listener to update the selected option
        optionButton.addEventListener("click", () => {
            // Check if the quiz has been submitted and the user is not on the last question
            if (!isQuizSubmitted || currentQuestionIndex < questions.length - 1) {
                // Remove the 'selected' class from all option buttons
                const optionButtons = document.querySelectorAll("#options button");
                optionButtons.forEach(button => {
                    button.classList.remove("selected");
                });

                // Add the 'selected' class to the clicked button
                optionButton.classList.add("selected");

                // Update the selected option in the selectedOptions array
                updateSelectedOption(option);
            }
        });

        optionsElement.appendChild(optionButton);
    });

    // Update button visibility based on the current question index
    updateButtonVisibility();

    // Disable/Enable the "Previous" and "Next" buttons based on the current question index
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1; // Disable on last question

    // Disable options on the last question if the quiz has been submitted
    if (currentQuestionIndex === questions.length - 1 && isQuizSubmitted) {
        const optionButtons = document.querySelectorAll("#options button");
        optionButtons.forEach(button => {
            button.disabled = true;
        });
    }
}


// Update button visibility based on the current question index
function updateButtonVisibility() {
    if (currentQuestionIndex === questions.length - 1) {
        // Hide the "Next" button on the last question
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block"; // Show the "Next" button on other questions
    }
}


// Function to calculate the user's score
function calculateScore() {
    let userScore = 0;
    for (let i = 0; i < questions.length; i++) {
        if (selectedOptions[i] === questions[i].correctAnswer) {
            userScore++;
        }
    }
    return userScore;
}




// Function to display the score card
function displayScoreCard() {
    const scoreCard = document.getElementById("score-card");
    const scoreElement = document.getElementById("score");
    const correctAnswersElement = document.getElementById("correct-answers");

    // Display the score
    scoreElement.textContent = "Your Score: " + score + " out of " + questions.length;

    // Display correct answers
    let correctAnswers = "Correct Answers:";
    questions.forEach((question, index) => {
        correctAnswers += `\n${index + 1}. ${question.correctAnswer}`;
    });
    correctAnswersElement.textContent = correctAnswers;

    // Show the score card
    scoreCard.style.display = "block";

    // Hide the Previous and Next buttons on the scorecard
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    questionElement.style.display = "none";
    dashbord.style.display = "none"
    
    // Hide the question options (assuming the options are inside a container with the id "options")
    const optionsContainer = document.getElementById("options");
    optionsContainer.style.display = "none";
    
}


// Initialize the quiz by loading the first question
loadQuestion();

