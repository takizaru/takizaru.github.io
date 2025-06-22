        // Массивы слов для каждого правила
        const wordsByRule = {
            1: [
                { korean: "신다", translation: "носить (обувь)" },
                { korean: "실고", translation: "потерять и" },
                { korean: "신지", translation: "носить ли" },
                { korean: "신소", translation: "ношение (формальное)" },
                { korean: "앉다", translation: "сидеть" },
                { korean: "않고", translation: "не и" },
                { korean: "앉지", translation: "сидеть ли" },
                { korean: "앉소", translation: "сидение (формальное)" },
                { korean: "검다", translation: "быть черным" },
                { korean: "검고", translation: "черный и" },
                { korean: "검지", translation: "черный ли" },
                { korean: "검소", translation: "черный (формальное)" },
                { korean: "젊다", translation: "быть молодым" },
                { korean: "젊고", translation: "молодой и" },
                { korean: "젊지", translation: "молодой ли" },
                { korean: "핧다", translation: "лизать" },
                { korean: "핥고", translation: "лизать и" },
                { korean: "핥지", translation: "лизать ли" },
                { korean: "핥소", translation: "лизывание (формальное)" }
            ],
            2: [
                { korean: "감사합니다", translation: "Спасибо" },
                { korean: "고맙습니다", translation: "Благодарю" }
            ],
            3: [
                { korean: "미안합니다", translation: "Извините" },
                { korean: "죄송합니다", translation: "Прошу прощения" }
            ],
            4: [
                { korean: "사랑해요", translation: "Я тебя люблю" },
                { korean: "좋아해요", translation: "Ты мне нравишься" }
            ],
            5: [
                { korean: "사랑해요", translation: "Я тебя люблю" },
                { korean: "좋아해요", translation: "Ты мне нравишься" }
            ],
            6: [
                { korean: "잘 자요", translation: "Спокойной ночи" },
                { korean: "안녕히 주무세요", translation: "Спокойной ночи (уважительно)" }
            ]
        };
        
        // Текущие индексы для каждого правила
        const currentIndices = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        };
        
        // Текущее активное правило
        let currentRule = 1;
        let isAnimating = false;
        
        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Показываем первое правило и окно слов
            showRule(1);
            
            // Назначаем обработчики для кнопок переключения правил
            document.querySelectorAll('.prev-rule').forEach(btn => {
                btn.addEventListener('click', showPreviousRule);
            });
            
            document.querySelectorAll('.next-rule').forEach(btn => {
                btn.addEventListener('click', showNextRule);
            });
            
            // Инициализируем слова для всех правил
            for (let ruleNum = 1; ruleNum <= 5; ruleNum++) {
                updateWordDisplay(ruleNum);
            }
        });
        
        // Функция для показа правила по номеру с анимацией
        function showRule(ruleNum) {
            if (isAnimating || currentRule === ruleNum) return;
            isAnimating = true;
            
            // Начинаем анимацию переворота для текущего активного правила и окна слов
            const currentRuleElement = document.querySelector(`.rule[data-rule="${currentRule}"]`);
            const currentWordWindow = document.querySelector(`.word-window[data-rule="${currentRule}"]`);
            
            if (currentRuleElement && currentWordWindow) {
                currentRuleElement.classList.add('flipping');
                currentWordWindow.classList.add('flipping');
            }
            
            // После половины времени анимации (400ms) меняем контент
            setTimeout(() => {
                // Убираем классы flipping и active у текущих элементов
                if (currentRuleElement && currentWordWindow) {
                    currentRuleElement.classList.remove('flipping', 'active');
                    currentWordWindow.classList.remove('flipping', 'active');
                }
                
                // Добавляем классы новым элементам
                const newRuleElement = document.querySelector(`.rule[data-rule="${ruleNum}"]`);
                const newWordWindow = document.querySelector(`.word-window[data-rule="${ruleNum}"]`);
                
                if (newRuleElement && newWordWindow) {
                    newRuleElement.classList.add('active', 'flipping');
                    newWordWindow.classList.add('active', 'flipping');
                    
                    // Завершаем анимацию
                    setTimeout(() => {
                        newRuleElement.classList.remove('flipping');
                        newWordWindow.classList.remove('flipping');
                        currentRule = ruleNum;
                        isAnimating = false;
                    }, 400);
                }
            }, 400);
        }
        
        // Показать предыдущее правило
        function showPreviousRule() {
            const newRule = currentRule > 1 ? currentRule - 1 : 6;
            showRule(newRule);
        }
        
        // Показать следующее правило
        function showNextRule() {
            const newRule = currentRule < 6 ? currentRule + 1 : 1;
            showRule(newRule);
        }
        
        // Обновить отображение слова для указанного правила
        function updateWordDisplay(ruleNum) {
            const words = wordsByRule[ruleNum];
            const currentIndex = currentIndices[ruleNum];
            
            if (words && words.length > 0) {
                document.getElementById(`korean-word-${ruleNum}`).textContent = words[currentIndex].korean;
                document.getElementById(`translation-box-${ruleNum}`).textContent = words[currentIndex].translation;
            }
        }
        
        // Следующее слово для указанного правила
        function nextWord(ruleNum) {
            const words = wordsByRule[ruleNum];
            if (words && words.length > 0) {
                currentIndices[ruleNum] = (currentIndices[ruleNum] + 1) % words.length;
                updateWordDisplay(ruleNum);
                speakText(words[currentIndices[ruleNum]].korean);
            }
        }
        
        // Предыдущее слово для указанного правила
        function previousWord(ruleNum) {
            const words = wordsByRule[ruleNum];
            if (words && words.length > 0) {
                currentIndices[ruleNum] = (currentIndices[ruleNum] - 1 + words.length) % words.length;
                updateWordDisplay(ruleNum);
                speakText(words[currentIndices[ruleNum]].korean);
            }
        }
        
        // Воспроизвести аудио для указанного правила
        function playAudio(ruleNum) {
            const words = wordsByRule[ruleNum];
            if (words && words.length > 0) {
                speakText(words[currentIndices[ruleNum]].korean);
            }
        }
        
        // Функция для озвучивания текста
        function speakText(text) {
            if ('speechSynthesis' in window && text) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ko-KR';
                speechSynthesis.speak(utterance);
            } else {
                console.error('Speech synthesis not supported or no text provided');
            }
        }