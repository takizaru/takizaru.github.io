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
                { korean: "차", translation: "чай" },
                { korean: "커피", translation: "кофе" },
                { korean: "우유", translation: "молоко" },
                { korean: "주스", translation: "сок" },
                { korean: "음료", translation: "напиток" },
                { korean: "마시다", translation: "пить" },
                { korean: "먹다", translation: "кушать" },
                { korean: "음식을 먹다", translation: "кушать еду" },
                { korean: "밥", translation: "рис" },
                { korean: "빵", translation: "хлеб" }
            ],
            slovar6: [
                { korean: "물", translation: "вода" },
                { korean: "국", translation: "суп" },
                { korean: "과자", translation: "сладости" },
                { korean: "피자", translation: "пицца" },
                { korean: "햄버거", translation: "гамбургер" },
                { korean: "치킨", translation: "курица" },
                { korean: "케이크", translation: "торт" },
                { korean: "고기", translation: "мясо" },
                { korean: "생선", translation: "рыба" },
                { korean: "스파게티", translation: "спагетти" }
            ],
            slovar7: [
                { korean: "집", translation: "дом" },
                { korean: "영화관", translation: "кинотеатр" },
                { korean: "학교", translation: "школа" },
                { korean: "슈퍼마켓", translation: "супермаркет" },
                { korean: "호텔", translation: "отель" },
                { korean: "식당", translation: "кафе, столовая" },
                { korean: "병원", translation: "больница" },
                { korean: "공원", translation: "парк" },
                { korean: "회사", translation: "фирма" },
                { korean: "공장", translation: "завод" }
            ],
            slovar8: [
                { korean: "바지", translation: "брюки" },
                { korean: "치마", translation: "юбка" },
                { korean: "셔츠", translation: "рубашка" },
                { korean: "정장", translation: "костюм" },
                { korean: "청바지", translation: "джинсы" },
                { korean: "반바지", translation: "шорты" },
                { korean: "드레스, 원피스", translation: "платье" },
                { korean: "블라우스", translation: "блузка" },
                { korean: "입다", translation: "надевать (на тело)" },
                { korean: "벗다", translation: "снимать (одежду, раздеваться)" }
            ],
            slovar9: [
                { korean: "구두", translation: "ботинки" },
                { korean: "신발", translation: "обувь" },
                { korean: "운동화", translation: "кроссовки" },
                { korean: "슬리퍼", translation: "тапочки" },
                { korean: "하이힐", translation: "туфли (на высоких каблуках)" },
                { korean: "신다", translation: "надевать (на ноги)" },
                { korean: "옷을 갈아 입다", translation: "переодеться" },
                { korean: "신발을 신다", translation: "носить обувь" },
                { korean: "옷을 입다", translation: "носить одежду" },
                { korean: "신발을 벗다", translation: "снять обувь" }
            ],
            // slovar5: [
            //     { korean: "모자를 쓰다", translation: "носить шляпу" },
            //     { korean: "안경을 썼다", translation: "надел очки" },
            //     { korean: "메다", translation: "носить на плечах" },
            //     { korean: "가방을 메다", translation: "носить сумку" },
            //     { korean: "풀다", translation: "развязывать" },
            //     { korean: "신발끈을 매다", translation: "завязать шнурки на обуви" },
            //     { korean: "넥타이를 매었다", translation: "завязал (надел галстук)" },
            //     { korean: "끼다", translation: "носить на руке" },
            //     { korean: "반지를 끼다", translation: "носить кольцо" },
            //     { korean: "장갑을 꼈다", translation: "надел перчатки" }
            // ],
            // slovar5: [
            //     { korean: "빼다", translation: "снимать (украшения)" },
            //     { korean: "귀걸이를 빼다", translation: "снимать сережки" },
            //     { korean: "걸치다", translation: "надевать, набрасывать" },
            //     { korean: "외투를 걸치다", translation: "надевать пальто" },
            //     { korean: "차다", translation: "носить на конечностях (ремни, часы)" },
            //     { korean: "시계를 차다", translation: "носить часы" },
            //     { korean: "팔지를 찼다", translation: "надел браслет" },
            //     { korean: "멋있다 ", translation: "стильный, замечательный, милый" },
            //     { korean: "재미있다", translation: "веселый, интересный" },
            //     { korean: "놀다", translation: "играть" }
            // ],
            
            slovar10: [
                { korean: "버스", translation: "автобус" },
                { korean: "배", translation: "лодка, пароход" },
                { korean: "택시", translation: "такси" },
                { korean: "지하철", translation: "метро" },
                { korean: "자동차", translation: "машина" },
                { korean: "자전거", translation: "велосипед" },
                { korean: "오토바이", translation: "мотоцикл" },
                { korean: "비행기", translation: "самолет" },
                { korean: "경찰차", translation: "полицейская машина" },
                { korean: "구급차", translation: "скорая помощь" }
            ],
            slovar11: [
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
            ],
            slovar12: [
                { korean: "일월", translation: "январь" },
                { korean: "삼월", translation: "март" },
                { korean: "오월", translation: "май" },
                { korean: "유월", translation: "* июнь" },
                { korean: "팔월", translation: "август" },
                { korean: "시월", translation: "* октябрь" },
                { korean: "구월", translation: "сентябрь" },
                { korean: "십일월", translation: "ноябрь" },
                { korean: "십이월", translation: "декабрь" },
                { korean: "년", translation: "год" }
            ],
            slovar13: [
                { korean: "시", translation: "час" },
                { korean: "분", translation: "минута" },
                { korean: "초", translation: "секунда" },
                { korean: "아침", translation: "утро" },
                { korean: "낮", translation: "день" },
                { korean: "저녁", translation: "вечер" },
                { korean: "밤", translation: "ночь" },
                { korean: "새벽", translation: "рассвет" },
                { korean: "반", translation: "половина (2 часа 30 минут)" },
                { korean: "전", translation: "без (без 15 минут 9)" }
            ],
            slovar14: [
                { korean: "머리", translation: "голова" },
                { korean: "눈", translation: "глаз" },
                { korean: "귀", translation: "ухо" },
                { korean: "코", translation: "нос" },
                { korean: "입", translation: "рот" },
                { korean: "뺨", translation: "щека" },
                { korean: "턱", translation: "подбородок" },
                { korean: "머리가락", translation: "волосы" },
                { korean: "몸", translation: "тело" },
                { korean: "아프다", translation: "болеть" }
            ],
            slovar15: [
                { korean: "목", translation: "шея" },
                { korean: "어깨", translation: "плечо" },
                { korean: "배", translation: "живот" },
                { korean: "가슴", translation: "грудная клетка (грудь)" },
                { korean: "팔", translation: "рука" },
                { korean: "다리", translation: "нога" },
                { korean: "손", translation: "кисть руки" },
                { korean: "손가락", translation: "палец (руки)" },
                { korean: "발", translation: "стопа" },
                { korean: "발가락", translation: "палец (ноги)" }
            ],
            // slovar5: [
            //     { korean: "무릎", translation: "колено" },
            //     { korean: "팔꿈치", translation: "локоть" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" }
            // ],
            // slovar5: [
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" },
            //     { korean: "", translation: "" }
            // ],
            slovar16: [
                { korean: "과연", translation: "неужели; действительно" },
                { korean: "물론", translation: "конечно" },
                { korean: "늘", translation: "всегда; постоянно" },
                { korean: "결코", translation: "ни в коем случае" },
                { korean: "응당", translation: "непременно; конечно" },
                { korean: "응", translation: "да; ладно" },
                { korean: "설마", translation: "вряд ли, едва ли" },
                { korean: "정말", translation: "честное слово; в самом деле" },
                { korean: "아무쪼록", translation: "по мере возможности" },
                { korean: "하물며", translation: "тем более; тем более, что" }
            ],
            slovar17: [
                { korean: "그리고", translation: "и" },
                { korean: "그러나", translation: "а; но; однако" },
                { korean: "그러므로", translation: "поэтому" },
                { korean: "그러면", translation: "итак, в таком случае, (и) тогда" },
                { korean: "그런데", translation: " однако (же)" },
                { korean: "오히려", translation: "наоборот, напротив; скорее всего" },
                { korean: "더구나", translation: "более того, вдобавок,кроме того, к тому же" },
                { korean: "그러면", translation: "итак,в таком случае, (и) тогда" },
                { korean: "혹은", translation: "или; либо" },
                { korean: "또는", translation: "или; либо" }
            ],
            slovar18: [
                { korean: "또", translation: "снова, опять; и, еще" },
                { korean: "또다시", translation: "снова, еще раз, опять" },
                { korean: "천만에", translation: "что вы; не за что; не стоит благодарности" },
                { korean: "천만", translation: "10 миллионов" },
                { korean: "얼마", translation: "сколько; немного" },
                { korean: "언제", translation: "когда" },
                { korean: "언제나", translation: "всегда, в любое время" },
                { korean: "어느", translation: "какой, который; какой - то; когда - то" },
                { korean: "어느새", translation: "незаметно; как - то, в какой - то момент" },
                { korean: "아주", translation: "очень, совершенно" }
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
