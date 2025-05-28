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
        task: "Я еду на автобусе (автобусом).",
        words: ["나", "는", "은", "버스", "로", "으로", "갑니다."],
        correctOrder: ["나는", "버스로", "갑니다."],
        combinations: [
            { parts: ["나", "는"], result: "나는" },
            { parts: ["버스", "로"], result: "버스로" }
           ]
    },
    {
        task: "Он режет хлеб ножом.",
        words: ["그", "는", "은", "로", "으로", "칼",  "빵", "을","를", "자릅니다."],
        correctOrder: ["그는", "칼로", "빠을", "자릅니다."],
        combinations: [
            { parts: ["그", "는"], result: "그는" },
            { parts: ["칼", "로"], result: "칼로" },
            { parts: ["빵", "을"], result: "빵을" }
           ]
    },
    {
        task: "Он любит ее всем сердцем. (душой)",
        words: ["그", "는", "은", "그녀", "을", "를", "마음", "으로", "로",  "사랑합니다."],
        correctOrder: ["그는", "그녀를", "마음으로",  "사랑합니다."],
        combinations: [
            { parts: ["그", "는"], result: "그는" },
            { parts: ["그녀", "를"], result: "그녀를" },
            { parts: ["마음", "으로"], result: "마음으로" }
            ]
    },
    {
        task: "Друг едет домой на метро.",
        words: ["친구", "는", "은", "집", "에", "에서", "지하철", "로", "으로", "갑니다."],
        correctOrder: ["친구는", "집에", "지하철로", "갑니다."],
        combinations: [
            { parts: ["친구", "는"], result: "친구는" },
            { parts: ["지하철", "로"], result: "지하철로" },
            { parts: ["집", "에"], result: "집에" }
        ]
    },
    {
        task: "Мама работает врачом.",
        words: ["엄마", "는", "은", "의사", "로",  "으로", "일합니다."],
        correctOrder: ["엄마는",  "의사로", "일합니다."],
        combinations: [
            { parts: ["엄마", "는"], result: "엄마는" },
            { parts: ["의사", "로"], result: "의사로" }
      ]
    },
    {
        task: "Я пишу авторучкой.",
        words: ["나", "는", "은", "만년필", "로", "으로", "씁니다."],
        correctOrder: ["나", "는", "만년필로", "씁니다."],
        combinations: [
            { parts: ["나", "는"], result: "그는" },
            { parts: ["만년필", "로"], result: "만년필로" }
        ]
    },
    {
        task: "Я мою руки водой.",
        words: ["나는", "로", "으로", "을", "를", "물", "손", "씻습니다."],
        correctOrder: ["나는", "손을", "물로", "씻습니다."],
        combinations: [
            { parts: ["손", "을"], result: "손을" },
            { parts: ["물", "로"], result: "물로" }
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
