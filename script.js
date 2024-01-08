let subjectsData = [
    {
        id: '0',
        name: 'Geography',
        questions: [
            "1. What is the capital of Australia?",
            "2. What is the largest country by land area?",
            "3. What is the smallest country in the world?",
            "4. What is the longest river in the world?",
            "5. What is the largest desert in the world?",
            "6. What is the highest mountain in the world?",
            "7. What is the largest ocean in the world?",
            "8. What is the capital of Canada?",
            "9. What is the most populous city in the world?",
            "10. What is the largest continent in the world?"
        ],
        answers: [
            ["Sydney", "Melbourne", "Canberra", "Perth"],
            ["Canada", "Russia", "China", "Brazil"],
            ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
            ["Amazon", "Yangtze", "Mississippi", "The Nile"],
            ["Gobi", "Kalahari", "The Sahara", "Sonoran"],
            ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            ["Atlantic", "The Pacific Ocean", "Indian", "Southern"],
            ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            ["Tokyo", "Shanghai", "Delhi", "Sao Paulo"],
            ["Africa", "North America", "Europe", "Asia"]
        ],
        correct_answers: [
            "Canberra",
            "Russia",
            "Vatican City",
            "The Nile",
            "The Sahara",
            "Mount Everest",
            "The Pacific Ocean",
            "Ottawa",
            "Tokyo",
            "Asia"
        ]
    },  // case 0
    {
        id: '1',
        name: 'Literature',
        questions: [
            "1. Who wrote 'Pride and Prejudice'?",
            "2. Who is the author of the 'Harry Potter' series?",
            "3. Who wrote 'To Kill a Mockingbird'?",
            "4. Who wrote '1984'?",
            "5. Who wrote 'The Great Gatsby'?",
            "6. Who wrote 'Moby-Dick'?",
            "7. Who wrote 'War and Peace'?",
            "8. Who wrote 'The Odyss'?",
            "9. Who wrote 'Don Quixote'?",
            "10. Who wrote 'Ulysses'?"
        ],
        answers: [
            ["Emily Bronte", "George Eliot", "Jane Austen", "Louisa May Alcott"],
            ["J.K.Rowling", "Suzanne Collins", "Rick Riordan", "Philip Pullman"],
            ["John Steinbeck", "William Faulkner", "Harper Lee", "Ernest Hemingway"],
            ["Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut", "George Orwell"],
            ["Ernest Hemingway", "F.Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
            ["Nathaniel Hawthorne", "Washington Irving", "Herman Melville", "Edgar Allan Poe"],
            ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
            ["Virgil", "Ovid", "Sophocles", "Homer"],
            ["Gabriel Garcia Marquez", "Miguel de Cervantes Saavedra", "Jorge Luis Borges", "Mario Vargas Llosa, Miguel de Cervantes"],
            ["Virginia Woolf", "T.S.Eliot", "W.B.Yeats", "James Joyce"]
        ],
        correct_answers: [
            "Jane Austen",
            "J.K. Rowling",
            "Harper Lee",
            "George Orwell",
            "F. Scott Fitzgerald",
            "Herman Melville",
            "Leo Tolstoy",
            "Homer",
            "Miguel de Cervantes",
            "James Joyce"
        ]
    },  // case 1
    {
        id: '2',
        name: 'Science',
        questions: [
            "1. What is the chemical symbol for gold?",
            "2. What is the largest planet in our solar system?",
            "3. What is the speed of light?",
            "4. What is the atomic number of carbon?",
            "5. What is the powerhouse of the cell?",
            "6. Who developed the theory of relativity?",
            "7. What is the human body's largest organ?",
            "8. What is the most abundant gas in the Earth's atmosphere?",
            "9. What is the chemical formula for water?",
            "10. What is the first element on the periodic table?"
        ],
        answers: [
            ["Gd", "Go", "Gl", "Au"],
            ["Saturn", "Jupiter", "Uranus", "Neptune"],
            ["* 299,792 m/sec", "* 299,792 km/sec", "* 299,792 mi/sec", "* 299,792 feet/sec"],
            ["6", "7", "8", "9"],
            ["Nucleus, Ribosome", "Endoplasmic reticulum", "Mitochondria", "Membrane"],
            ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
            ["Heart", "Brain", "Liver", "Skin"],
            ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
            ["H2", "HO", "H3O", "H2O"],
            ["Helium", "Hydrogen", "Lithium", "Beryllium"]
        ],
        correct_answers: [
            "Au",
            "Jupiter",
            "* 299,792 km/sec",
            "6",
            "Mitochondria",
            "Albert Einstein",
            "Skin",
            "Nitrogen",
            "H2O",
            "Hydrogen"
        ]
    },  // case 2
    {
        id: '3',
        name: 'History',
        questions: [
            "1. In what year did World War II end?",
            "2. Who was the first person to walk on the moon?",
            "3. Who was the 16th President of the United States?",
            "4. What year was the Declaration of Independence signed?",
            "5. Who was the first woman to fly solo across the Atlantic?",
            "6. What civilization built the pyramids in Egypt?",
            "7. Who discovered America?",
            "8. Who was known as the 'Maid of Orleans'?",
            "9. What year did the Titanic sink?",
            "10. Who was the first Emperor of Rome?"
        ],
        answers: [
            ["1944", "1946", "1945", "1947"],
            ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Jackson"],
            ["1775", "1776", "1777", "1781"],
            ["Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran", "Amelia Earhart"],
            ["The Ancient Egyptians", "The Ancient Greeks", "The Ancient Romans", "The Ancient Persians"],
            ["Amerigo Vespucci", "Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus"],
            ["Catherine of Aragon", "Anne Boleyn", "Joan of Arc", "Mary Queen of Scots"],
            ["1911", "1913", "1912", "1914"],
            ["Julius Caesar", "Marcus Aurelius", "Nero", "Augustus"]
        ],
        correct_answers: [
            "1945",
            "Neil Armstrong",
            "Abraham Lincoln",
            "1776",
            "Amelia Earhart",
            "The Ancient Egyptions",
            "Christopher Columbus",
            "Joan of Arc",
            "1912",
            "Augustus"
        ]
    },  // case 3
    {
        id: '4',
        name: 'Art',
        questions: [
            "1. Who painted the Mona Lisa?",
            "2. Who painted 'The Starry Night'?",
            "3. Who painted 'The Scream'?",
            "4. Who painted 'The Persistence of Memory'?",
            "5. Who painted 'Guernica'?",
            "6. Who painted 'American Gothic'?",
            "7. Who painted 'The Birth of Venus'?",
            "8. Who painted 'The Night Watch'?",
            "9. Who painted 'Las Meninas'?",
            "10. Who painted 'The Last Supper'?"
        ],
        answers: [ 
            ["Michelangelo", "Raphael", "Leonardo da Vinci", "Caravaggio"],
            ["Paul Gauguin", "�douard Manet", "Claude Monet", "Vincent van Gogh"],
            ["Pablo Picasso", "Edvard Munch", "Pierre - Auguste Renoir", "Gustav Klimt"],
            ["Joan Mir�", "Ren� Magritte", "Max Ernst", "Salvador Dali"],
            ["Pablo Picasso", "Henri Matisse", "Marc Chagall", "Wassily Kandinsky"],
            ["Edward Hopper", "Grant Wood", "Andrew Wyeth", "Thomas Hart Benton"],
            ["Titian", "Giorgione", "Piero della Francesca", "Sandro Boticelli"],
            ["Johannes Vermeer", "Frans Hals", "Rembrandt van Rijn", "Jan Steen"],
            ["Diego Velazquez", "Francisco Goya", "Bartolom� Esteban Murillo", "Jos� de Ribera"],
            ["Donatello", "Leonardo da Vinci", "Andrea del Verrocchio", "Cimabue"],
        ],
        correct_answers: [
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Edvard Munch",
            "Salvador Dali",
            "Pablo Picasso",
            "Grant Wood",
            "Sandro Boticelli",
            "Rembrandt van Rijn",
            "Diego Velazquez",
            "Leonardo da Vinci"
        ]
    },  // case 4
    {
        id: '5',
        name: 'Music',
        questions: [
            "1. Who composed the 'Moonlight Sonata'?",
            "2. Who is known as the 'King of Pop'?",
            "3. Who composed 'The Four Seasons'?",
            "4. Who wrote the song 'Imagine'?",
            "5. Who is the lead vocalist of the band 'Queen'?",
            "6. Who composed the 'Brandenburg Concertos'?",
            "7. Who is known as the 'Queen of Soul'?",
            "8. Who composed 'The Magic Flute'?",
            "9. Who wrote the song 'Like a Rolling Stone'?",
            "10. Who is the lead vocalist of the band 'U2'?"
        ],
        answers: [
            ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Franz Schubert"], 
            ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Bob Dylan"], 
            ["Franz Joseph Haydn", "Johann Sebastian Bach", "Antonio Vivaldi", "Ludwig van Beethoven"], 
            ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"], 
            ["Mick Jagger", "Freddie Mercury", "Roger Daltrey", "Robert Plant"], 
            ["Franz Schubert", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach"],       
            ["Tina Turner", "Diana Ross", "Whitney Houston", "Aretha Franklin"], 
            ["Paul Simon", "Neil Young", "Wolfgang Amadeus Mozart", "Bruce Springsteen"],
            ["Mick Jagger", "Bob Dylan", "Robert Plant", "Roger Daltrey"], 
            ["Bono", "Mick Jagger", "Robert Plant", "Roger Daltrey"] 
        ],
        correct_answers: [
            "Ludwig van Beethoven",
            "Michael Jackson",
            "Antonio Vivaldi",
            "John Lennon",
            "Freddie Mercury",
            "Johann Sebastian Bach",
            "Aretha Franklin",
            "Wolfgang Amadeus Mozart",
            "Bob Dylan",
            "Bono"
        ]
    },  // case 5
];

let body = document.querySelector('body');

const MAIN = document.getElementById('main');
MAIN.style.display = 'grid';

const SUBJECTS_CONTAINER = document.getElementById('subjectsContainer');
SUBJECTS_CONTAINER.style.display = "grid";

const CONTAINER = document.getElementById('generalContainer');
CONTAINER.style.display = 'none';

let header = document.getElementById('header');
header.textContent = "Select A Topic!";

const CLOSE = document.getElementById('close');
CLOSE.style.display = 'none';

let subjects = document.querySelectorAll('.subject');

let isClicked = false;
let currentQuestionIndicies = subjectsData.map(() => 0); 

let question = document.getElementById('question');
question.style.display = 'grid';

let answers = document.querySelectorAll('.answer');
let answerContainer = document.getElementById('answerContainer');

let answer1 = document.getElementById('a');
let answer2 = document.getElementById('b');
let answer3 = document.getElementById('c');
let answer4 = document.getElementById('d');
let answerClickHandlers = [];

let correctAnswers = 0; 
let scoreContainer = document.getElementById('scoreContainer');
scoreContainer.style.display = 'none'; 

let scoreText = document.getElementById('scoreText');
scoreText.textContent = '0 / 10 Correct!'

let suggestion = document.getElementById('suggestion');

let userAnswers = [];


function getAnswerClickHandler(subjectId) {
    return (event) => {
        let clickedAnswer = event.target.textContent;
        let answerColor = event.target;
        let correctAnswer = subjectsData[subjectId].correct_answers[currentQuestionIndicies[subjectId]];
        userAnswers.push(clickedAnswer);

        if (clickedAnswer === correctAnswer) {
            correctAnswers += 1; 
            scoreText.textContent = correctAnswers + ' / 10 Correct!';
            question.textContent = 'Correct!';
            answerColor.style.border = '1px solid lime';
            answerColor.style.boxShadow = 'inset 0 0 1rem lime';
            answerColor.style.color = 'lime';
            body.style.pointerEvents = 'none';
            setTimeout(() => {
                answerColor.style.border = '1px solid white';
                answerColor.style.boxShadow = 'inset 0 0 1rem white';
                answerColor.style.color = 'white'; 
                body.style.pointerEvents = 'auto';
            }, 1000);
        } else if (clickedAnswer !== correctAnswer) {
            question.textContent = "Incorrect. The correct answer is " + correctAnswer + ".";
            answerColor.style.border = '1px solid red';
            answerColor.style.boxShadow = 'inset 0 0 1rem red';
            answerColor.style.color = 'red';
            body.style.pointerEvents = 'none';
            setTimeout(() => {
                answerColor.style.border = '1px solid white';
                answerColor.style.boxShadow = 'inset 0 0 1rem white';
                answerColor.style.color = 'white';
                body.style.pointerEvents = 'auto';
            }, 1000);

        };

        setTimeout(() => {
            ++currentQuestionIndicies[subjectId];
            if (currentQuestionIndicies[subjectId] < subjectsData[subjectId].questions.length) {
                question.textContent = subjectsData[subjectId].questions[currentQuestionIndicies[subjectId]];
                answer1.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][0];
                answer2.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][1];
                answer3.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][2];
                answer4.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][3];
            } else {
                question.style.display = 'none';
                questionGeneralContainer.style.display = 'none';
                scoreContainer.style.display = 'block';
                let scorePercentage = correctAnswers * 10;
                let scoreTitle = document.getElementById('scoreTitle');
                if (scorePercentage <= 59) {
                    scoreTitle.style.color = 'red';
                    suggestion.textContent = 'You need some work in this area! Maybe try taking the test again to see if you learned anything!';
                } else if (scorePercentage >= 60 && scorePercentage <= 79) {
                    scoreTitle.style.color = 'yellow';
                    suggestion.textContent = "You're doing better! Try again!";
                } else if (scorePercentage >= 80) {
                    scoreTitle.style.color = 'green';
                    suggestion.textContent = 'Awesome! Shoot for 100% now!';
                } else if (scorePercentage == 100) {
                    scoreTitle.style.color = 'lime';
                    suggestion.textContent = "You have mastered this quiz! Time to move to the next one!";
                }
                scoreTitle.textContent = "Your score is: " + scorePercentage + "%";;

                let resultQuestions = document.querySelectorAll('.resultQuestion');
                resultQuestions.forEach((resultQuestion, index) => {    
                    resultQuestion.textContent = subjectsData[subjectId].questions[index];
                });

                let resultAnswers = document.querySelectorAll('.resultAnswer');
                resultAnswers.forEach((resultAnswer, index) => {
                  let correctAnswer = subjectsData[subjectId].correct_answers[index];
                  resultAnswer.textContent = [index + 1] + ". " + userAnswers[index];
                    if (resultAnswer.textContent == [index + 1] + ". " + correctAnswer) {
                        resultAnswer.style.color = 'lime';
                      } else {
                        resultAnswer.style.color = 'red';
                      }
                })
                answerContainer.style.display = 'none';
            }
        }, 1000);

        setTimeout(() => { 
            header.textContent = subjectsData[subjectId].name;
        }, 1000);

    };
}

subjects.forEach((subject, subjectId) => {
    subject.addEventListener("click", () => {
        MAIN.style.height = '80%'; // new code
        questionGeneralContainer.style.display = 'block';
        SUBJECTS_CONTAINER.style.display = "none";
        CONTAINER.style.display = 'flex';
        header.textContent = subjectsData.subject;
        CLOSE.style.display = 'block';
        CLOSE.addEventListener("click", close);
        isClicked = true;

        if (isClicked == true) {
            header.textContent = subjectsData[subjectId].name;
            question.textContent = subjectsData[subjectId].questions[currentQuestionIndicies[subjectId]];
            answer1.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][0];
            answer2.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][1];
            answer3.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][2];
            answer4.textContent = subjectsData[subjectId].answers[currentQuestionIndicies[subjectId]][3];
        }

        if (answerClickHandlers[subjectId]) {
            answers.forEach((answer) => {
                answer.removeEventListener("click", answerClickHandlers[subjectId]);
            });
        }
        answerClickHandlers[subjectId] = getAnswerClickHandler(subjectId);
        answers.forEach((answer) => {
            answer.addEventListener("click", answerClickHandlers[subjectId]);
        });
    });
});

function close() {
    MAIN.style.height = '75%'; // new code
    SUBJECTS_CONTAINER.style.display = "grid";
    CONTAINER.style.display = 'none';
    CLOSE.style.display = 'none';
    isClicked = false;
    header.textContent = 'Select a Topic!';

    answers.forEach((answer) => {
        answerClickHandlers.forEach((handler) => {
            answer.removeEventListener("click", handler);
        });
    });

    question.style.display = 'grid';
    currentQuestionIndicies = subjectsData.map(() => 0);
    correctAnswers = 0;
    scoreContainer.style.display = 'none';
    answerContainer.style.display = 'grid';
    userAnswers = [];
};

