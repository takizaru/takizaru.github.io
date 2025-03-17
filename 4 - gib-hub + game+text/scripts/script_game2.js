document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
        {
            russian: "Я ученик",
            korean: "저는 학생입니다",
            structure: [
                { type: "input", value: "저는" },
                { type: "fixed", value: "학생" },
                { type: "fixed", value: "입니다" }
            ]
        },
        {
            russian: "Это книга",
            korean: "이것은 책입니다",
            structure: [
                { type: "input", value: "이것은" },
                { type: "fixed", value: "책" },
                { type: "input", value: "입니다" }
            ]
        },
        {
            russian: "Я учу корейский",
            korean: "저는 한국어를 공부합니다",
            structure: [
                { type: "input", value: "저는" },
                { type: "input", value: "한국어를" },
                { type: "input", value: "공부합니다" }
            ]
        }
    ];

    let currentSentenceIndex = 0;
    const sentenceElement = document.getElementById("sentence");
    const buildSentenceElement = document.getElementById("buildSentence");
    const checkButton = document.getElementById("checkButton");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    const playButton = document.getElementById("playButton");

    function loadSentence() {
        const currentSentence = sentences[currentSentenceIndex];
        sentenceElement.textContent = currentSentence.russian;

        buildSentenceElement.innerHTML = "";

        currentSentence.structure.forEach((part, index) => {
            if (part.type === "input") {
                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = "Введите слово";
                input.dataset.expected = part.value;
                input.style.width = "50px";
                input.addEventListener("input", function() {
                    const temp = document.createElement("span");
                    temp.style.visibility = "hidden";
                    temp.style.whiteSpace = "nowrap";
                    temp.style.fontSize = "32px";
                    temp.style.fontFamily = "Noto Sans KR, serif";
                    temp.textContent = this.value || this.placeholder;
                    document.body.appendChild(temp);
                    this.style.width = temp.offsetWidth + 20 + "px";
                    document.body.removeChild(temp);
                });

                // Обработка нажатия клавиш
                input.addEventListener("keydown", function(event) {
                    if (event.key === " " || event.key === "ArrowLeft") {
                        event.preventDefault();
                        const nextInput = this.nextElementSibling;
                        if (nextInput && nextInput.tagName === "INPUT") {
                            nextInput.focus();
                        }
                    } else if (event.key === "Enter") {
                        event.preventDefault();
                        checkButton.click(); // Вызов проверки
                    }
                });

                buildSentenceElement.appendChild(input);
            } else if (part.type === "fixed") {
                const span = document.createElement("span");
                span.className = "fixed-text";
                span.textContent = part.value;
                buildSentenceElement.appendChild(span);
            }
        });

        resultElement.textContent = "";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        checkButton.style.display = "inline-block"; // Показываем кнопку "Проверить"
    }

    playButton.addEventListener("click", function() {
        const currentSentence = sentences[currentSentenceIndex];
        const utterance = new SpeechSynthesisUtterance(currentSentence.korean);
        utterance.lang = "ko-KR";
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    });

    checkButton.addEventListener("click", function() {
        const currentSentence = sentences[currentSentenceIndex];
        const inputs = buildSentenceElement.querySelectorAll("input");
        let allCorrect = true;

        inputs.forEach(input => {
            if (input.value.trim() !== input.dataset.expected) {
                allCorrect = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (allCorrect) {
            resultElement.textContent = "✅ Правильно!";
            nextButton.style.display = "inline-block";
            prevButton.style.display = "inline-block";
            checkButton.style.display = "none"; // Скрываем кнопку "Проверить"
        } else {
            resultElement.textContent = "😢 Неправильно. Попробуйте снова.";
        }
    });

    nextButton.addEventListener("click", function() {
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        loadSentence();
    });

    prevButton.addEventListener("click", function() {
        currentSentenceIndex = (currentSentenceIndex - 1 + sentences.length) % sentences.length;
        loadSentence();
    });

    // Бургер-меню
    const burgerMenu = document.getElementById("burgerMenu");
    const navHeader = document.getElementById("navHeader");

    burgerMenu.addEventListener("click", function() {
        navHeader.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!navHeader.contains(event.target) && !burgerMenu.contains(event.target)) {
            navHeader.classList.remove("active");
        }
    });

    loadSentence();
});