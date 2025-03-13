
const words = [
    { korean: "물", translation: "Вода" },
    { korean: "음식", translation: "Еда" },
    { korean: "학교", translation: "Школа" },
    { korean: "친구", translation: "Друг" },
    { korean: "가족", translation: "Семья" },
    { korean: "시간", translation: "Время" },
    { korean: "일", translation: "Работа" },
    { korean: "가다", translation: "идти ( от говорящего)" }, 
    { korean: "오다", translation: "идти" },
    { korean: "걱정하다", translation: "беспокоиться" },
    { korean: "건강하다", translation: "быть здоровым" },
    { korean: "계란", translation: "яйцо" },
    { korean: "계약", translation: "договор, контракт" },
    { korean: "계약서", translation: "текст договора, контракта" },
    { korean: "고기", translation: "мясо, рыба" },
    { korean: "물", translation: "вода" },
    { korean: "물고기", translation: "рыба" },
    { korean: "고맙다", translation: "быть благодарным" },
    { korean: "고양이", translation: "кошка" },
    { korean: "공부하다", translation: "учить (ся)" },
    { korean: "공원", translation: "парк" },
    { korean: "과자", translation: "кондитерское изделие (конфеты, печенье …)" },
    { korean: "괜찮다", translation: "неплохой, сносный, нормальный" },
    { korean: "교수", translation: "профессор" },
    { korean: "국수", translation: "куксу (корейская лапша)" },
    { korean: "그", translation: "(э) тот" },
    { korean: "그분", translation: "вежл. он, она" },
    { korean: "그녀", translation: "она" },
    { korean: "그래", translation: "да; так; хорошо" },
    { korean: "그러나", translation: "но; однако" },
    { korean: "그릇", translation: "посуда; тарелка" },
    { korean: "그리고", translation: "и; при этом; затем" },
    { korean: "그만", translation: "хватит, достаточно" },
    { korean: "기분", translation: "настроение" },
    { korean: "기쁘다", translation: "радостный, веселый" },
    { korean: "기쁨", translation: "радость" },
    { korean: "길", translation: "дорога" },
    { korean: "길다", translation: "длинный" },
    { korean: "김치", translation: "кимчхи" },
    { korean: "꼭", translation: "обязательно" },
    { korean: "끝", translation: "конец" },
    { korean: "끝나다", translation: "заканчиваться" },
    { korean: "끝내다", translation: "заканчивать, завершать" },
    { korean: "음식", translation: "Еда" },
    { korean: "학교", translation: "Школа" },
    { korean: "친구", translation: "Друг" },
    { korean: "가족", translation: "Семья" },
    { korean: "시간", translation: "Время" },
    { korean: "일", translation: "Работа" },
    { korean: "공부", translation: "Учеба" },
    { korean: "여행", translation: "Путешествие" },
    { korean: "휴가", translation: "Отпуск" },
    { korean: "영화", translation: "Фильм" },
    { korean: "음악", translation: "Музыка" },
    { korean: "책", translation: "Книга" },
    { korean: "커피", translation: "Кофе" },
    { korean: "차", translation: "Чай" },
    { korean: "빵", translation: "Хлеб" },
    { korean: "과일", translation: "Фрукты" },
    { korean: "야채", translation: "Овощи" },
    { korean: "고기", translation: "Мясо" },
    { korean: "생선", translation: "Рыба" },
    { korean: "계란", translation: "Яйцо" },
    { korean: "우유", translation: "Молоко" },
    { korean: "치즈", translation: "Сыр" },
    { korean: "버터", translation: "Масло" },
    { korean: "소금", translation: "Соль" },
    { korean: "설탕", translation: "Сахар" },
    { korean: "나", translation: "я" },
    { korean: "나쁘다", translation: "плохой" },
    { korean: "나중에", translation: "потом, в конце" },
    { korean: "날", translation: "день" },
    { korean: "날다", translation: "летать" },
    { korean: "날씨", translation: "погода" },
    { korean: "남자", translation: "мужчина" },
    { korean: "남편", translation: "муж" },
    { korean: "낮", translation: "день" },
    { korean: "내일", translation: "завтра" },
    { korean: "너", translation: "ты" },
    { korean: "놀다", translation: "гулять, веселиться" },
    { korean: "놀음", translation: "игра" },
    { korean: "놈", translation: "презрен. человек, тип" },
    { korean: "농담하다", translation: "шутить" },
    { korean: "누구", translation: "кто" },
    { korean: "뉘", translation: "кто" },
    { korean: "늘", translation: "всегда, постоянно" },
    { korean: "늦다", translation: "поздний; опаздывать" },
    { korean: "달", translation: "луна, месяц" },
    { korean: "닭", translation: "курица" },
    { korean: "당신", translation: "Вы" },
    { korean: "대학", translation: "институт" },
    { korean: "대학교", translation: "университет" },
    { korean: "돈", translation: "деньги" },
    { korean: "뛰다", translation: "прыгать, подпрыгивать; скакать; бежать" },
    { korean: "라디오", translation: "радио" },
    { korean: "러시아", translation: "Россия" },
    { korean: "러시아말", translation: "русский язык" },
    { korean: "러시아사람", translation: "русский (человек)" },
    { korean: "로봇", translation: "робот" },
    { korean: "마다", translation: "каждый" },
    { korean: "만나다", translation: "встречать (ся)" },
    { korean: "만년필", translation: "авторучка" },
    { korean: "만두", translation: "пельмени" },
    { korean: "만들다", translation: "делать, изготавливать" },
    { korean: "마냑", translation: "если; допустим (предположим), что" },
    { korean: "많다", translation: "многочисленный; много" },
    { korean: "말", translation: "конь; слово; язык" },
    { korean: "말을 걸다", translation: "заводить разговор" },
    { korean: "말하다", translation: "говорить, рассказывать" },
    { korean: "매우", translation: "очень" },
    { korean: "매일", translation: "каждый день" },
    { korean: "머리", translation: "голова" },
    { korean: "머리가 나쁘다", translation: "глупый" },
    { korean: "머리가 좋다", translation: "умный" },
    { korean: "모르다", translation: "не знать; не уметь" },
    { korean: "무엇", translation: "что; что – то" },
    { korean: "무엇인가", translation: "что – нибудь" },
    { korean: "미", translation: "красота" },
    { korean: "미국", translation: "Америка" },
    { korean: "미소", translation: "улыбка" },
    { korean: "미소를 짓다", translation: "улыбаться" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },
    // { korean: "주스", translation: "Сок" },

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
