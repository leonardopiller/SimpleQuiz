# SimpleQuiz
A simple quiz application that corrects the right answers and counts the total score.


## How does it work?
 - This project was divided into several functions, namely: `startQuiz`, `resetState`, `showQuestion`, `resetState`, `selectAnswear(e)`, `showScore` and `handleNextButton`.
 
 - The `selectAnswear(e)` function utilizes the **dataset** to indicate the correct answear.
 
 - After answering a question, the correct answer is highlighted with a green background. If the user selects the wrong answer, the background of the wrong answer will turn red and the answer buttons will become unclickable. 
 
 - The "Next" button will only appear after an answer has been chosen, and it is prevented from proceeding beyond the five questions.
 
 - Once the game is finished, the total score is displayed, and the content of the '#next-btn' button changes to "Play again", allowing the user to restart the game by clicking it.
 
 ## Interface
Shown below is a screenshot of the game before starting:

![quiz-before](https://github.com/leonardopiller/SimpleQuiz/assets/121625024/45feb407-7c9c-461d-81aa-cee82db099da)

      Additional images can be found in the `screenshots` folter

## Bibliographical Reference
<a href="https://youtu.be/PBcqGxrr9g8"> GreatStack - YouTube </a>
