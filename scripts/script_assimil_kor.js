const words = [
    { korean: "폭로", translation: "" },
    { korean: "박물다", translation: "" },
    { korean: "듣는다", translation: "" },
    { korean: "근로자", translation: "" },
    { korean: "맏물", translation: "" },
    { korean: "듣습니다", translation: "" },
    { korean: "일년", translation: "" },
    { korean: "삼림", translation: "" },
    { korean: "잡는다", translation: "" },
    { korean: "십리", translation: "" },
    { korean: "십만", translation: "" },
    { korean: "명령", translation: "" },
    { korean: "일념", translation: "" },
    { korean: "할날", translation: "" },
    { korean: "얼녹다", translation: "" },
    { korean: "얼넘기다", translation: "" },
    { korean: "불놀이", translation: "" },
    { korean: "말내다", translation: "" },
    { korean: "달나라", translation: "" },
    { korean: "잘나다", translation: "" },
    { korean: "볼낯", translation: "" },
    { korean: "이깔나무", translation: "" },
    { korean: "삼림", translation: "" },
    { korean: "심리", translation: "" },
    { korean: "감로", translation: "" },
    { korean: "검류", translation: "" },
    { korean: "심란", translation: "" },
    { korean: "염량", translation: "" },
    { korean: "삼륜", translation: "" },
    { korean: "남루한", translation: "" },
    { korean: "염려", translation: "" },
    { korean: "음량", translation: "" },
    { korean: "음료수", translation: "" },
    { korean: "첨리", translation: "" },
    { korean: "명령", translation: "" },
    { korean: "장력", translation: "" },
    { korean: "장로", translation: "" },
    { korean: "강력", translation: "" },
    { korean: "강령", translation: "" },
    { korean: "강림", translation: "" },
    { korean: "강론", translation: "" },
    { korean: "증량", translation: "" },
    { korean: "풍랑", translation: "" },
    { korean: "풍력", translation: "" },
    { korean: "영락", translation: "" },
    { korean: "영력", translation: "" },
    { korean: "용량", translation: "" },
    { korean: "용립", translation: "" },
    { korean: "망라", translation: "" },
    { korean: "영륙", translation: "" },
    { korean: "영락", translation: "" },
    { korean: "등록", translation: "" },
    { korean: "듣는다", translation: "" },
    { korean: "묻는다", translation: "" },
    { korean: "쏟는다", translation: "" },
    { korean: "받느니", translation: "" },
    { korean: "갓나다", translation: "" },
    { korean: "첫날", translation: "" },
    { korean: "벗는다", translation: "" },
    { korean: "끝나다", translation: "" },
    { korean: "있나", translation: "" },
    { korean: "잇는", translation: "" },
    { korean: "잣눈", translation: "" },
    { korean: "찾는다", translation: "" },
    { korean: "첫나들이", translation: "" },
    { korean: "읓놀이", translation: "" },
    { korean: "못난", translation: "" },
    { korean: "받소", translation: "" },
    { korean: "벗소", translation: "" },
    { korean: "있소", translation: "" },
    { korean: "늦소", translation: "" },
    { korean: "맛살", translation: "" },
    { korean: "못서다", translation: "" },
    { korean: "믿소", translation: "" },
    { korean: "웃소", translation: "" },
    { korean: "찾소", translation: "" },
    { korean: "잊소", translation: "" },
    { korean: "햇살", translation: "" },
    { korean: "햇수", translation: "" },
    { korean: "첫사람", translation: "" },
    { korean: "첫새벽", translation: "" },
    { korean: "첫술", translation: "" },
    { korean: "겉살", translation: "" },
    { korean: "겉수수", translation: "" },
    { korean: "근로자", translation: "" },
    { korean: "만리", translation: "" },
    { korean: "간략", translation: "" },
    { korean: "만류", translation: "" },
    { korean: "만력", translation: "" },
    { korean: "전락", translation: "" },
    { korean: "단락", translation: "" },
    { korean: "곤란", translation: "" },
    { korean: "관람", translation: "" },
    { korean: "곤룡표", translation: "" },
    { korean: "단련", translation: "" },
    { korean: "전력", translation: "" },
    { korean: "전량", translation: "" },
    { korean: "전례", translation: "" },
    { korean: "인류", translation: "" },
    { korean: "밥맛", translation: "" },
    { korean: "입맛", translation: "" },
    { korean: "십만", translation: "" },
    { korean: "잡문", translation: "" },
    { korean: "잡물", translation: "" },
    { korean: "집마다", translation: "" },
    { korean: "업무", translation: "" },
    { korean: "잎만", translation: "" },
    { korean: "작년", translation: "" },
    { korean: "먹는다", translation: "" },
    { korean: "직녀", translation: "" },
    { korean: "악념", translation: "" },
    { korean: "악녀", translation: "" },
    { korean: "옥나비", translation: "" },
    { korean: "낙낙하다", translation: "" },
    { korean: "낚는다", translation: "" },
    { korean: "낙농", translation: "" },
    { korean: "막내", translation: "" },
    { korean: "닥나무", translation: "" },
    { korean: "석녀", translation: "" },
    { korean: "억누르다", translation: "" },
    { korean: "깎는다", translation: "" },
    { korean: "폭로", translation: "" },
    { korean: "악랄", translation: "" },
    { korean: "악력", translation: "" },
    { korean: "국력", translation: "" },
    { korean: "국립", translation: "" },
    { korean: "막로동", translation: "" },
    { korean: "착륙", translation: "" },
    { korean: "적립", translation: "" },
    { korean: "국론", translation: "" },
    { korean: "국력", translation: "" },
    { korean: "법령", translation: "" },
    { korean: "법례", translation: "" },
    { korean: "법률", translation: "" },
    { korean: "법리", translation: "" },
    { korean: "십리", translation: "" },
    { korean: "갑론", translation: "" },
    { korean: "답례", translation: "" },
    { korean: "압력", translation: "" },
    { korean: "엽록소", translation: "" },
    { korean: "합력", translation: "" },
    { korean: "합리", translation: "" },
    { korean: "합류", translation: "" },
    { korean: "압록강", translation: "" },
    { korean: "악마", translation: "" },
    { korean: "박물관", translation: "" },
    { korean: "악물다", translation: "" },
    { korean: "학문", translation: "" },
    { korean: "악몽", translation: "" },
    { korean: "막막", translation: "" },
    { korean: "막말", translation: "" },
    { korean: "적멸", translation: "" },
    { korean: "국물", translation: "" },
    { korean: "식모", translation: "" },
    { korean: "한국말", translation: "" },
    { korean: "맏물", translation: "" },
    { korean: "햇무리", translation: "" },
    { korean: "첫마디", translation: "" },
    { korean: "첫말", translation: "" },
    { korean: "첫머리", translation: "" },
    { korean: "봇물", translation: "" },
    { korean: "첫물", translation: "" },
    { korean: "첫무대", translation: "" },
    { korean: "겉마르다", translation: "" },
    { korean: "겉맞추다", translation: "" },
    { korean: "겉모양", translation: "" },
    { korean: "겉물", translation: "" },
    { korean: "꽃마을", translation: "" },
    { korean: "꽃맞이", translation: "" },
    { korean: "꽃무늬", translation: "" },
    { korean: "꽃물", translation: "" },
    { korean: "잡는다", translation: "" },
    { korean: "합니다", translation: "" },
    { korean: "겁내다", translation: "" },
    { korean: "겁나", translation: "" },
    { korean: "잡년", translation: "" },
    { korean: "잡념", translation: "" },
    { korean: "앞날", translation: "" },
    { korean: "십년", translation: "" },
   

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
