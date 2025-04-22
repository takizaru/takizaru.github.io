// Озвучка корейских слов
document.querySelectorAll('.korean-text').forEach(element => {
    element.addEventListener('click', () => {
        const koreanText = element.getAttribute('data-korean');
        const utterance = new SpeechSynthesisUtterance(koreanText);
        utterance.lang = 'ko-KR'; // Устанавливаем язык корейский
        speechSynthesis.speak(utterance);
    });
});

// Левый бургер и закладка
const leftBookmarkIcon = document.querySelector('.left-bookmark-icon');
const leftBurger = document.querySelector('.left-burger');



// document.addEventListener('click', function (event) {
//     if (!leftBurger.contains(event.target) {
//         leftBurger.style.display = 'none';
//         leftBookmarkIcon.style.display = 'block';
//     }
// });


leftBookmarkIcon.addEventListener('click', function (event) {
event.stopPropagation();
leftBookmarkIcon.style.display = 'none';
leftBurger.style.display = 'block';
});

document.addEventListener('click', function (event) {
if (!leftBurger.contains(event.target) && event.target !== leftBookmarkIcon) {
leftBurger.style.display = 'none';
leftBookmarkIcon.style.display = 'block';
}
});

// Правый бургер и закладка
const bookmarkIcon = document.querySelector('.bookmark-icon');
const rightBurger = document.querySelector('.right-burger');

bookmarkIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    bookmarkIcon.style.display = 'none';
    rightBurger.style.display = 'block';
});

document.addEventListener('click', function (event) {
    if (!rightBurger.contains(event.target)) {
        rightBurger.style.display = 'none';
        bookmarkIcon.style.display = 'block';
    }
});

// Нижний бургер и закладка
const bottomBookmarkIcon = document.querySelector('.bottom-bookmark-icon');
const bottomBurger = document.querySelector('.bottom-burger');

bottomBookmarkIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    bottomBookmarkIcon.style.display = 'none';
    bottomBurger.style.display = 'block';
});

document.addEventListener('click', function (event) {
    if (!bottomBurger.contains(event.target)) {
        bottomBurger.style.display = 'none';
        bottomBookmarkIcon.style.display = 'block';
    }
});

// Функция для переключения видимости второй части бургера
function toggleBurger() {
    const part1 = document.querySelector('.burger-part1');
    const part2 = document.querySelector('.burger-part2');

    if (part2.style.display === 'none' || part2.style.display === '') {
        part1.style.display = 'none';
        part2.style.display = 'flex';
    } else {
        part1.style.display = 'flex';
        part2.style.display = 'none';
    }
}


