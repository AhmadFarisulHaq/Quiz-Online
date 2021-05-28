const quizNumer = document.querySelector('.quiz-number');
const quizText = document.querySelector('.quiz-text');
const quizOption = document.querySelector('.quiz-option');
const next = document.querySelector('.next');

let temp = 0;
let currentQuiz;
let kuis = [];
let pilgan = [];
let acak = [];

function setKuis() {
    const totalQuiz = quiz.length;
    // buat index soal acak
    while (acak.length < totalQuiz) {
        let random = Math.floor(Math.random() * totalQuiz);
        if (acak.indexOf(random) > -1) {
            continue;
        }
        acak.push(random);
    }
    console.log(acak)
    // membuat soal
    for (let i = 0; i < totalQuiz; i++) {
        kuis.push(quiz[i]);
    }
    console.log(kuis)
}
function nextQuiz() {
    // set kuis number
    quizNumer.innerHTML = "question " + (temp + 1) + " of " + kuis.length;
    // set kuis soal
    currentQuiz = kuis[acak[temp]]
    // cek isi currentQuiz
    console.log(currentQuiz);
    // set kuis soal pada html
    quizText.innerHTML = currentQuiz.soal;
    // set pilihan ganda
    const optionQuiz = currentQuiz.pilih.length;
    quizOption.innerHTML = "";
    for (let i = 0; i < optionQuiz; i++) {
        const option = document.createElement('div');
        option.innerHTML = currentQuiz.pilih[i];
        option.id = i;
        option.className = "option";
        quizOption.appendChild(option);
    }


    temp++;
}
next.onclick = () => {
    if (temp === kuis.length) {
        console.log('Soal Habis');
        let result = document.querySelector('.result');
        result.classList("show");
        // result.style.display = block;
        console.log(result);
    }
    else {
        nextQuiz();
    }
}
window.onload = () => {
    setKuis();
    nextQuiz();
} 