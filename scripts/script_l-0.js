const words = [
    { korean: "알다", translation: "" },
    { korean: "아는", translation: "" },
    { korean: "압니다", translation: "" },
    { korean: "아십니까", translation: "" },
    { korean: "알고", translation: "" },
    { korean: "멀고", translation: "" },
    { korean: "멀다", translation: "" },
    { korean: "머는", translation: "" },
    { korean: "멉니다", translation: "" },
    { korean: "삽니까", translation: "" },
    { korean: "사십니다", translation: "" },
    { korean: "삽니다", translation: "" },
    { korean: "살고", translation: "" },
    { korean: "사는", translation: "" },
    { korean: "불다", translation: "" },
    { korean: "부는", translation: "" },
    { korean: "불고", translation: "" },
    { korean: "길다", translation: "" },
    { korean: "기는", translation: "" },
    { korean: "깁니다", translation: "" },


];

let currentIndex = 0;

// Функция для получения случайного индекса
function getRandomIndex() {
    return Math.floor(Math.random() * words.length);
}

// Функция для обновления слова
function updateWord() {
    const word = words[currentIndex];
    document.getElementById("korean-word").textContent = word.korean;
    document.getElementById("translation-box").textContent = word.translation;
}

// Функция для перехода к следующему слову (случайно)
function nextWord() {
    currentIndex = getRandomIndex();
    updateWord();
    speakText(words[currentIndex].korean);
}

// Функция для перехода к предыдущему слову (случайно)
function previousWord() {
    currentIndex = getRandomIndex();
    updateWord();
    speakText(words[currentIndex].korean);
}

// Функция для озвучивания текста
function speakText(text) {
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR'; // Для корейского языка
        speechSynthesis.speak(utterance);
    }
}

// Функция для воспроизведения аудио
function playAudio() {
    speakText(words[currentIndex].korean);
}

// Инициализация первого слова
updateWord();
// Инициализация первого слова
updateWord();
