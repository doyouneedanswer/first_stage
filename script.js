const correctAnswer = "Шчщцч";

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value;
    const message = document.getElementById("message");

    if (userAnswer.toLowerCase() === correctAnswer) {
        message.textContent = "Правильно!";
        message.style.color = "green";
    } else {
        message.textContent = "Неправильно, ищи ответ";
        message.style.color = "red";
    }
}
