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

    const sentences = [
        {
            task: "я иду в общежитие",
            words: ["나", "는", "기숙사", "에", "갑니다"],
            correctOrder: ["나는", "기숙사에", "갑니다"]
        },
        {
            task: "он идет в библиотеку",
            words: ["그는", "도서관에", "갑니다"],
            correctOrder: ["그는", "도서관에", "갑니다"]
        }
    ];


    let currentSentenceIndex = 0;
    let usedWords = [];

    function loadSentence(index) {
        const sentence = sentences[index];
        taskText.textContent = sentence.task;
        wordPool.innerHTML = '';
        sentenceBuilder.innerHTML = '';
        feedback.innerHTML = '';
        usedWords = [];
        checkBtn.style.display = 'inline-block'; // Показываем кнопку "Проверить"

        // Перемешиваем слова
        const shuffledWords = sentence.words.sort(() => Math.random() - 0.5);

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
        const currentOrder = Array.from(sentenceBuilder.children).map(child => child.dataset.word);
        const correctOrder = sentences[currentSentenceIndex].correctOrder;

        if (currentOrder.join('') === correctOrder.join('')) {
            feedback.innerHTML = '✅ Правильно!';
            nextBtn.style.display = 'inline-block';
        } else {
            feedback.innerHTML = '😢 Неправильно. Попробуйте снова.';
            retryBtn.style.display = 'inline-block';
        }

        // Скрываем кнопку "Проверить" после нажатия
        checkBtn.style.display = 'none';
    }

    function resetGame() {
        loadSentence(currentSentenceIndex);
        retryBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    function nextSentence() {
        if (currentSentenceIndex < sentences.length - 1) {
            currentSentenceIndex++;
            resetGame();
        }
    }

    function prevSentence() {
        if (currentSentenceIndex > 0) {
            currentSentenceIndex--;
            resetGame();
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

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkOrder();
        }
    });

    // Загружаем первое предложение
    loadSentence(currentSentenceIndex);
});