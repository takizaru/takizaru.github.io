document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
       
        {
            korean: "내 이름은 안나입니다. 내 고향은 모스크바입니다. 저는 12 살입니다. 나는 조금 한국어를 말합니다. 내 가족과 나는 내년 여름에 한국에 가겠습니다. 그래서 저는 한국어를 열심히 공부하고 있습니다.",
            // russian: "Я ученик.",
            vocabulary: [
                { korean: "고향은", russian: "родина" },
                { korean: "조금", russian: "немного" },
                { korean: "가족", russian: "семья" },
                { korean: "여름", russian: "лето" },
                { korean: "그래서", russian: "поэтому" },
                { korean: "열심히", russian: "усердно" },
            ]
        },
        {
            korean: "오늘은 주말입니다. 그래서 오후에 우리는 대공원에 갑니다. 동물원은 사람이 많습니다. 동물원에서 호랑이, 사자, 곰, 타조, 늑대, 하마, 악어, 원숭이, 낙타를 볼 수 있습니다.",
            // russian: "Сегодня выходные. Поэтому, после обеда, мы идем в большой парк. В зоопарках много людей. В зоопарке можно увидеть тигров, львов, медведей, страусов, волков, бегемотов, крокодилов, обезьян, верблюдов.",
            vocabulary: [
                { korean: "오늘", russian: "сегодня" },
                { korean: "주말", russian: "выходные" },
                { korean: "우리", russian: "мы" },
                { korean: "대공원", russian: "большой парк" },
                { korean: "동물원", russian: "зоопарк" },
                { korean: "호랑이", russian: "тигр" },
                { korean: "사자", russian: "лев" },
                { korean: "곰", russian: "медведь" },
                { korean: "타조", russian: "страус" },
                { korean: "늑대", russian: "волк" }
            ]
        },
        {
            korean: "오늘은 수요일입니다. 저녁 18 시 30 분에 친구들과 나는 카페에 갑니다. 우리는 이 카페를 정말로 좋아합니다.나는 이 카페에서 음악을 정말 좋아한다. 정중한 웨이터가 일합니다.  가격은 비싸지 않습니다. 그리고 요리는 매우 맛있습니다.",
            // russian: "Это книга.",
            vocabulary: [
                { korean: "오늘", russian: "сегодня" },
                { korean: "수요일", russian: "среда" },
                { korean: "저녁", russian: "вечер" },
                { korean: "친구", russian: "друг" },
                { korean: "카페", russian: "кафе" },
                { korean: "정말", russian: "действительно" },
                { korean: "좋아하다", russian: "нравиться" },
                { korean: "음악", russian: "Книга" },
                { korean: "정중한", russian: "вежливый" },
                { korean: "웨이터", russian: "официант" },
                { korean: "가격", russian: "цена" },
                { korean: "비싸지 않다", russian: "не дорогой" },
                { korean: "요리", russian: "блюдо" },
                { korean: "매우", russian: "очень" },
                { korean: "맛이 있다", russian: "вкусный" }
            ]
        },
      
        // {
        //     korean: "저는 한국어를 공부합니다",
        //     russian: "Я учу корейский.",
        //     vocabulary: [
        //         { korean: "저는", russian: "Я" },
        //         { korean: "한국어", russian: "Корейский язык" },
        //         { korean: "공부합니다", russian: "учу" }
        //     ]
        // }
    ];

    let currentSentenceIndex = 0;
    const koreanText = document.getElementById('koreanText');
    const playButton = document.getElementById('playButton');
    const nextButton = document.getElementById('nextButton');
    const beforeButton = document.getElementById('beforeButton');
    const vocabularyTable = document.getElementById('vocabularyTable');

    function loadSentence() {
        // Прерываем текущую озвучку
        speechSynthesis.cancel();

        // Загружаем текст и словарь
        koreanText.innerText = sentences[currentSentenceIndex].korean;
        loadVocabulary(sentences[currentSentenceIndex].vocabulary);

        // Управление видимостью кнопок
        beforeButton.style.display = currentSentenceIndex > 0 ? 'inline-block' : 'none';
        nextButton.style.display = currentSentenceIndex < sentences.length - 1 ? 'inline-block' : 'none';
    }

    function loadVocabulary(vocabulary) {
        vocabularyTable.innerHTML = '';
        vocabulary.forEach(word => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${word.korean}</td>
                <td>${word.russian}</td>
            `;
            vocabularyTable.appendChild(row);
        });
    }

    playButton.addEventListener('click', () => {
        const text = koreanText.innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.5;
        speechSynthesis.speak(utterance);
    });

    nextButton.addEventListener('click', () => {
        if (currentSentenceIndex < sentences.length - 1) {
            currentSentenceIndex++;
            loadSentence();
        }
    });

    beforeButton.addEventListener('click', () => {
        if (currentSentenceIndex > 0) {
            currentSentenceIndex--;
            loadSentence();
        }
    });

    vocabularyTable.addEventListener('click', (e) => {
        if (e.target.tagName === 'TD') {
            const word = e.target.textContent;
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'ko-KR';
            utterance.rate = 0.3; // Очень медленная скорость
            speechSynthesis.speak(utterance);

            // Подсветка выбранного слова
            const rows = vocabularyTable.querySelectorAll('tr');
            rows.forEach(row => {
                row.querySelectorAll('td').forEach(td => td.classList.remove('highlight'));
            });
            e.target.classList.add('highlight');
        }
    });

    loadSentence();
});