const dictionaries = {
    slovar1: [
                { korean: "나", translation: "я" },
                { korean: "그", translation: "он" },
                { korean: "그녀", translation: "она" },
                { korean: "친구", translation: "друг" },
                { korean: "우리", translation: "мы" },
                { korean: "쓰다", translation: "писать" },
                { korean: "보다", translation: "смотреть; читать" },
                { korean: "읽다", translation: "читать" },
                { korean: "가다", translation: "идти; уходить" },
                { korean: "오다", translation: "идти; приходить" }
            ],
            slovar2: [
                { korean: "예", translation: "да" },
                { korean: "대답하다", translation: "отвечать" },
                { korean: "묻다", translation: "спрашивать" },
                { korean: "무엇", translation: "что?" },
                { korean: "당신", translation: "Вы" },
                { korean: "하다", translation: "делать" },
                { korean: "학교", translation: "школа" },
                { korean: "어디", translation: "где?; куда?; откуда?" },
                { korean: "듣다", translation: "слушать; слышать" },
                { korean: "어떻게", translation: "как?; куда?; каким образом?" }
            ],
            slovar3: [
                { korean: "남자", translation: "мужчина" },
                { korean: "여자", translation: "женщина" },
                { korean: "아버지", translation: "отец" },
                { korean: "아가씨", translation: "девушка" },
                { korean: "아기", translation: "малыш" },
                { korean: "아내", translation: "жена" },
                { korean: "남편", translation: "муж" },
                { korean: "아들", translation: "сын" },
                { korean: "딸", translation: "дочь" },
                { korean: "어머니", translation: "мать" }
            ],
            slovar4: [
                { korean: "없다", translation: "не быть; не иметься" },
                { korean: "없이", translation: "без" },
                { korean: "언제", translation: "когда" },
                { korean: "언제나", translation: "всегда, в любое время" },
                { korean: "왜", translation: "почему" },
                { korean: "있다", translation: "быть, находиться" },
                { korean: "기다리다", translation: "ждать, ожидать" },
                { korean: "이야기하다", translation: "рассказывать" },
                { korean: "주다", translation: "давать" },
                { korean: "받다", translation: "брать; получать" }
            ],
            slovar5: [
                { korean: "월요일", translation: "понедельник" },
                { korean: "화요일", translation: "вторник" },
                { korean: "수요일", translation: "среда" },
                { korean: "목요일", translation: "четверг" },
                { korean: "금요일", translation: "пятница" },
                { korean: "토요일", translation: "суббота" },
                { korean: "일요일", translation: "воскресенье" },
                { korean: "오늘", translation: "сегодня" },
                { korean: "어제", translation: "вчера" },
                { korean: "내일", translation: "завтра" }
            ]
};




let currentDictionary = [];
let currentWordIndex = 0;
let correctWords = new Set();
let isHorizontal = false;



// Элементы управления
const playButton = document.getElementById('play-button');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultMessage = document.getElementById('result-message');
const koreanInput = document.getElementById('korean-input');
const startDictationButton = document.getElementById('start-dictation');
const trainerContainer = document.getElementById('trainer-container');
const completionButtons = document.getElementById('completion-buttons');
const backToVocabButton = document.getElementById('back-to-vocab-button');
const backToDictionariesButton = document.getElementById('back-to-dictionaries');
const backToDictListButton = document.getElementById('back-to-dict-list');
const tryAgainButton = document.getElementById('try-again-button');
const basket = document.getElementById('basket');
const trainerCard = document.getElementById('trainer-card');

// Обновление корзины с шариками
function updateBasket() {
    basket.innerHTML = '';
    isHorizontal = window.innerWidth <= 1200;
    
    if (isHorizontal) {
        basket.classList.add('horizontal');
        basket.style.width = '275px';
        basket.style.minHeight = '110px';
    } else {
        basket.classList.remove('horizontal');
        basket.style.width = '110px';
        basket.style.minHeight = '275px';
    }
    
     // Создаем шарики только для правильно отвеченных слов
     currentDictionary.forEach((word, index) => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        if (correctWords.has(word.korean)) {
            ball.classList.add('active');
        }
        basket.appendChild(ball);
    });
}

// Добавление шарика в корзину
function addBallToBasket() {
    correctWords.add(currentDictionary[currentWordIndex].korean);
    // Находим все шарики и активируем нужное количество
    const balls = basket.querySelectorAll('.ball');
    balls.forEach((ball, index) => {
        if (index < correctWords.size) {
            ball.classList.add('active');
        }
    });
}

// Создание анимированного шарика
function createRollingBall() {
    const ball = document.createElement('div');
    ball.className = 'rolling-ball';
    
    const checkButtonRect = checkButton.getBoundingClientRect();
    ball.style.left = `${checkButtonRect.left + checkButtonRect.width/2 - 2.5}px`;
    ball.style.top = `${checkButtonRect.top + checkButtonRect.height/2 - 2.5}px`;
    
    const basketRect = basket.getBoundingClientRect();
    const endX = basketRect.left + basketRect.width/2 - 25;
    const endY = basketRect.top + basketRect.height/2 - 25;
    
    document.body.appendChild(ball);
    
    ball.style.transform = `translate(${endX - checkButtonRect.left}px, ${endY - checkButtonRect.top}px) scale(10)`;
    
    setTimeout(() => {
        ball.remove();
        updateBasket(); // Обновляем корзину после анимации
    }, 1500);
}


// Загрузка словаря
function loadDictionary(target) {
    currentDictionary = dictionaries[target];
    currentWordIndex = 0;
    correctWords.clear();
    updateTable();
    showVocabulary();
    updateBasket();
}

// Обновление таблицы словаря
function updateTable() {
    const table = document.getElementById('vocabularyTable');
    table.innerHTML = currentDictionary.map((word, index) => `
        <tr>
            <td onclick="speak('${word.korean}')">${word.korean}</td>
            <td>${word.translation}</td>
        </tr>
    `).join('');
}

// Показать словарь
function showVocabulary() {
    document.querySelector('.left-panel').classList.remove('hidden');
    trainerContainer.classList.add('hidden');
    completionButtons.classList.add('hidden');
}

// Показать тренажер
function showTrainer() {
    document.querySelector('.left-panel').classList.add('hidden');
    trainerContainer.classList.remove('hidden');
    currentWordIndex = 0;
    correctWords.clear();
    updateTrainer();
    completionButtons.classList.remove('hidden');
    tryAgainButton.classList.add('hidden');
    updateBasket();
}

// Обновление тренажера
function updateTrainer() {
    const word = currentDictionary[currentWordIndex];
    document.getElementById('russian-word').textContent = word.translation;
    koreanInput.value = '';
    koreanInput.style.borderColor = '#ccc';
    resultMessage.textContent = '';
    speak(word.korean, { rate: 0.8 });
    prevButton.disabled = currentWordIndex === 0;
    nextButton.disabled = currentWordIndex === currentDictionary.length - 1;
}

// Проверка ответа
function checkAnswer() {
    const input = koreanInput.value.trim();
    const word = currentDictionary[currentWordIndex];
    
    if (input === word.korean) {
        resultMessage.textContent = "✅ Правильно!";
        resultMessage.style.color = "green";
        
        // Добавляем слово в правильные, если его еще нет
        if (!correctWords.has(word.korean)) {
            correctWords.add(word.korean);
            createRollingBall();
        }
        
        // Анимация вспышки
        trainerCard.classList.add('flash-effect');
        setTimeout(() => {
            trainerCard.classList.remove('flash-effect');
            nextWord();
        }, 1000);
    } else {
        resultMessage.textContent = "😢 Неправильно. Попробуйте снова.";
        resultMessage.style.color = "black-blue";
        koreanInput.style.borderColor = "black-blue";
    }
}

// Следующее слово
function nextWord() {
    if (currentWordIndex < currentDictionary.length - 1) {
        currentWordIndex++;
        updateTrainer();
    } else {
        tryAgainButton.classList.remove('hidden');
    }
}

// Предыдущее слово
function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        updateTrainer();
    }
}

// Перезапуск тренажера
function restartTrainer() {
    trainerCard.classList.add('flip-effect');
    setTimeout(() => {
        trainerCard.classList.remove('flip-effect');
        currentWordIndex = 0;
        correctWords.clear();
        updateTrainer();
        tryAgainButton.classList.add('hidden');
        updateBasket();
    }, 600);
}

// Возврат к словарям
function backToDictionaries() {
    document.getElementById('dictionary-section').classList.add('hidden');
    document.getElementById('image-section').classList.remove('hidden');
}

// Озвучка текста
function speak(text, options = {}) {
    const utterance = new SpeechSynthesisUtterance(text);
    Object.assign(utterance, { lang: 'ko-KR', rate: 0.8, ...options });
    window.speechSynthesis.speak(utterance);
}

// Обработчик изменения размера окна
function handleResize() {
    updateBasket();
}

// Инициализация
function init() {
    // Обработчики событий
    document.querySelectorAll('.image-item').forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            document.getElementById('image-section').classList.add('hidden');
            document.getElementById('dictionary-section').classList.remove('hidden');
            loadDictionary(target);
        });
    });

    startDictationButton.addEventListener('click', showTrainer);
    backToVocabButton.addEventListener('click', showVocabulary);
    backToDictionariesButton.addEventListener('click', backToDictionaries);
    backToDictListButton.addEventListener('click', backToDictionaries);
    checkButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', nextWord);
    prevButton.addEventListener('click', prevWord);
    tryAgainButton.addEventListener('click', restartTrainer);
    koreanInput.addEventListener('keypress', (e) => e.key === 'Enter' && checkAnswer());
    playButton.addEventListener('click', () => speak(currentDictionary[currentWordIndex].korean));
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', function() {
        if (basket && currentDictionary.length > 0) {
            updateBasket();
        }
    });
}

// Запуск при загрузке
window.addEventListener('DOMContentLoaded', init);
