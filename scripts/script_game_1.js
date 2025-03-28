document.addEventListener('DOMContentLoaded', function() {
    const wordPool = document.getElementById('word-pool');
    const sentenceBuilder = document.getElementById('sentence-builder');
    const feedback = document.getElementById('feedback');
    const taskText = document.getElementById('task-text');
    const speakIcon = document.getElementById('speak-icon');
    const checkBtn = document.getElementById('check-btn');
    const retryBtn = document.getElementById('retry-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextArrow = document.querySelector('.perehod a[href="/index/index_game_2 .html"]');


const sentences = [
    {
        task: "Я иду.",
        words: ["나", "는", "은", "갑니다."],
        correctOrder: ["나는", "갑니다."],
        combinations: [
            { parts: ["나", "는"], result: "나는" },
           ]
    },
    {
        task: "Я пишу.",
        words: ["나", "는", "은", "씁니다."],
        correctOrder: ["나는", "씁니다."],
        combinations: [
            { parts: ["나", "는"], result: "나는" },
           ]
    },
    {
        task: "Он читает.",
        words: ["그", "는", "은", "읽습니다."],
        correctOrder: ["그는", "읽습니다."],
        combinations: [
            { parts: ["그", "는"], result: "그는" },
            ]
    },
    {
        task: "Мы ждем.",
        words: ["우리", "는", "은", "기다립니다."],
        correctOrder: ["우리는", "기다립니다."],
        combinations: [
            { parts: ["우리", "는"], result: "우리는" },
        ]
    },
    {
        task: "Она смотрит.",
        words: ["그녀", "는", "은", "봅니다."],
        correctOrder: ["그녀는", "봅니다."],
        combinations: [
            { parts: ["그녀", "는"], result: "그녀는" },
      ]
    },
    {
        task: "Он отвечает.",
        words: ["그", "는", "은", "대답합니다."],
        correctOrder: ["그는", "대답합니다."],
        combinations: [
            { parts: ["그", "는"], result: "그는" },
        ]
    },
    {
        task: "Она учится в школе?",
        words: ["그녀", "는", "은", "학교", "에", "에서", "공부합니까?"],
        correctOrder: ["그녀는", "학교에서", "공부합니까?"],
        combinations: [
            { parts: ["그녀", "는"], result: "그녀는" },
            { parts: ["학교", "에서"], result: "학교에서" }
        ]
    },
    {
        task: "Где она учится?",
        words: ["그녀", "는", "은", "어디", "에", "에서", "공부합니까?"],
        correctOrder: ["그녀는", "어디에서", "공부합니까?"],
        combinations: [
            { parts: ["그녀", "는"], result: "그녀는" },
            { parts: ["어디", "에서"], result: "어디에서" }
        ]
    },
    {
        task: "Я иду в колледж (институт).",
        words: ["저", "는", "은", "대학", "에", "에서", "갑니다."],
        correctOrder: ["저는", "대학에", "갑니다."],
        combinations: [
            { parts: ["저", "는"], result: "저는" },
            { parts: ["대학", "에"], result: "대학에" }
        ]
    },
    {
        task: "Профессор спрашивает?",
        words: ["교수님", "는", "은", "묻습니까?"],
        correctOrder: ["교수님", "은", "묻습니까?"],
        combinations: [
            { parts: ["교수님", "은"], result: "교수님은" },
           ]
    },

    {
        task: "Я сплю ночью.",
        words: ["나", "는", "은", "밤", "에", "에에서","잡니다."],
        correctOrder: ["나는", "밤에", "잡니다."],
        combinations: [
            { parts: ["나", "는"], result: "나는" },
            { parts: ["밤", "에"], result: "밤에" }
        ]
    },
    {
        task: "Я смотрю телевизор.",
        words: ["나", "는", "은", "텔레비전", "을",  "를", "봅니다."],
        correctOrder: ["나는", "텔레비전을", "봅니다."],
        combinations: [
            { parts: ["나", "는"], result: "나는" },
            { parts: ["텔레비전", "을"], result: "텔레비전을" }
        ]
    },
    {
        task: "Она читает книгу.",
        words: ["그녀", "는", "은","책", "을", "를", "읽습니다."],
        correctOrder: ["그녀는", "책을", "읽습니다."],
        combinations: [
            { parts: ["그녀", "는"], result: "그녀는" },
            { parts: ["책", "을"], result: "책을" }
        ]
    },
    {
        task: "Что делает учитель?",
        words: ["선생님", "는", "은", "무엇", "을", "를", "합니까?"],
        correctOrder: ["선생님은", "무엇을", "합니까?"],
        combinations: [
            { parts: ["선생님", "은"], result: "선생님은" },
            { parts: ["무엇", "을"], result: "무엇을" }
        ]
    },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    // {
    //     task: "я иду в общежитие",
    //     words: ["나", "는", "기숙사", "에", "갑니다"],
    //     correctOrder: ["나는", "기숙사에", "갑니다"],
    //     combinations: [
    //         { parts: ["나", "는"], result: "나는" },
    //         { parts: ["기숙사", "에"], result: "기숙사에" }
    //     ]
    // },
    {
        task: "он идет в библиотеку",
        words: ["그", "는", "도서관", "에", "갑니다"],
        correctOrder: ["그는", "도서관에", "갑니다"],
        combinations: [
            { parts: ["그", "는"], result: "그는" },
            { parts: ["도서관", "에"], result: "도서관에" }
        ]
    }
];

let currentSentenceIndex = 0;
    let usedWords = [];
    let isAnswerCorrect = false;

    function loadSentence(index) {
        const sentence = sentences[index];
        taskText.textContent = sentence.task;
        wordPool.innerHTML = '';
        sentenceBuilder.innerHTML = '';
        sentenceBuilder.className = '';
        feedback.innerHTML = '';
        usedWords = [];
        checkBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        retryBtn.style.display = 'none';
        isAnswerCorrect = false;

        const shuffledWords = [...sentence.words].sort(() => Math.random() - 0.5);

        shuffledWords.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word';
            wordElement.textContent = word;
            wordElement.dataset.word = word;
            wordElement.addEventListener('click', () => moveWord(wordElement));
            wordPool.appendChild(wordElement);
        });
    }

    function moveWord(word) {
        if (!usedWords.includes(word.dataset.word)) {
            const wordElement = document.createElement('div');
            wordElement.className = 'word';
            wordElement.textContent = word.textContent;
            wordElement.dataset.word = word.dataset.word;
            sentenceBuilder.appendChild(wordElement);
            usedWords.push(word.dataset.word);
        }
    }

    function checkOrder() {
        const currentWords = Array.from(sentenceBuilder.children).map(child => child.dataset.word);
        const correctOrder = sentences[currentSentenceIndex].correctOrder;
        
        const flatCorrectOrder = correctOrder.join('').replace(/\s+/g, '');
        const flatCurrentOrder = currentWords.join('').replace(/\s+/g, '');
        
        if (flatCurrentOrder === flatCorrectOrder) {
            combineWords();
            feedback.innerHTML = '✅ Правильно!';
            nextBtn.style.display = 'inline-block';
            checkBtn.style.display = 'none';
            isAnswerCorrect = true;
        } else {
            feedback.innerHTML = '😢 Неправильно. Попробуйте снова.';
            retryBtn.style.display = 'inline-block';
            checkBtn.style.display = 'none';
            isAnswerCorrect = false;
        }
    }

    function combineWords() {
        const sentenceBuilderChildren = Array.from(sentenceBuilder.children);
        const combinations = sentences[currentSentenceIndex].combinations;
        const newSentenceBuilder = document.createElement('div');
        
        let i = 0;
        while (i < sentenceBuilderChildren.length) {
            let combined = false;
            
            for (const combo of combinations) {
                const comboLength = combo.parts.length;
                if (i + comboLength > sentenceBuilderChildren.length) continue;
                
                const currentSlice = sentenceBuilderChildren.slice(i, i + comboLength).map(el => el.dataset.word);
                
                if (arraysEqual(currentSlice, combo.parts)) {
                    const combinedWord = document.createElement('div');
                    combinedWord.className = 'word combined';
                    combinedWord.textContent = combo.result;
                    newSentenceBuilder.appendChild(combinedWord);
                    
                    i += comboLength;
                    combined = true;
                    break;
                }
            }
            
            if (!combined) {
                newSentenceBuilder.appendChild(sentenceBuilderChildren[i].cloneNode(true));
                i++;
            }
        }
        
        sentenceBuilder.innerHTML = '';
        sentenceBuilder.appendChild(newSentenceBuilder);
        sentenceBuilder.classList.add('combined');
        
        Array.from(sentenceBuilder.querySelectorAll('.word')).forEach(word => {
            word.style.width = 'auto';
            word.style.minWidth = 'fit-content';
        });
    }

    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function resetGame() {
        loadSentence(currentSentenceIndex);
    }

    function nextSentence() {
        if (currentSentenceIndex < sentences.length - 1) {
            currentSentenceIndex++;
            resetGame();
        } else {
            // Если это последнее предложение, переходим на следующую страницу
            window.location.href = "/index/index_game_2 .html";
        }
    }

    function prevSentence() {
        if (currentSentenceIndex > 0) {
            currentSentenceIndex--;
            resetGame();
        } else {
            // Если это первое предложение, переходим на предыдущую страницу
            window.location.href = "/index.html";
        }
    }

    speakIcon.addEventListener('click', function() {
        const sentence = sentences[currentSentenceIndex].correctOrder.join(' ');
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    });

    checkBtn.addEventListener('click', checkOrder);
    retryBtn.addEventListener('click', resetGame);
    nextBtn.addEventListener('click', nextSentence);
    prevBtn.addEventListener('click', prevSentence);

    // Обработчик для стрелки вправо
    nextArrow.addEventListener('click', function(e) {
        if (!isAnswerCorrect) {
            e.preventDefault();
            alert('Сначала правильно составьте предложение!');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (isAnswerCorrect) {
                nextSentence();
            } else {
                checkOrder();
            }
        }
    });

    loadSentence(currentSentenceIndex);
});
