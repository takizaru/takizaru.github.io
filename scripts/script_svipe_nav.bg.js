const burgerMenu = document.getElementById("burgerMenu");
        const navBurger = document.getElementById("navBurger");

        burgerMenu.addEventListener("click", function (event) {
            event.stopPropagation(); // Предотвращаем всплытие события
            navBurger.classList.toggle("active"); // Переключаем класс active
        });

        document.addEventListener("click", function (event) {
            if (!navBurger.contains(event.target) && !burgerMenu.contains(event.target)) {
                navBurger.classList.remove("active"); // Закрываем меню, если клик вне его
            }
        });

        /* Свайп для мобильных устройств */
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50; // Минимальное расстояние для свайпа
            if (touchEndX < touchStartX - swipeThreshold) {
                nextWord(); // Свайп влево
            } else if (touchEndX > touchStartX + swipeThreshold) {
                previousWord(); // Свайп вправо
            }
        }