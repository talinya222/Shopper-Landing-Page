document.addEventListener('DOMContentLoaded', () => {
	const tabButtons = document.querySelectorAll('.tabs-title');
	const tabsBodies = document.querySelectorAll('.tabs-body');
	const navPrev = document.querySelector('.slider-button-prev');
	const navNext = document.querySelector('.slider-button-next');

	const swipers = [];

	function activateTab(index) {
		// Активуємо таб
		tabButtons.forEach(btn => btn.classList.remove('_tab-active'));
		tabButtons[index].classList.add('_tab-active');

		// Активуємо відповідне тіло табу
		tabsBodies.forEach(body => body.classList.remove('_active'));
		tabsBodies[index].classList.add('_active');

		// Ініціалізуємо Swiper, якщо ще не створений
		const slider = tabsBodies[index].querySelector('.tabs-body-slider');
		if (slider && !swipers[index]) {
			swipers[index] = new Swiper(slider, {
				slidesPerView: 3,
				spaceBetween: 93,
				loop: true,
				navigation: {
					nextEl: navNext,
					prevEl: navPrev,
				},
			});
		}

		// Перепризначаємо стрілки навігації
		swipers.forEach((swiper, i) => {
			if (swiper) {
				if (i === index) {
					swiper.params.navigation.nextEl = navNext;
					swiper.params.navigation.prevEl = navPrev;
					swiper.navigation.init();
					swiper.navigation.update();
				} else {
					swiper.navigation.destroy(); // Вимикаємо стрілки для інших
				}
			}
		});
	}

	// Обробка кліку по табах
	tabButtons.forEach((btn, i) => {
		btn.addEventListener('click', () => activateTab(i));
	});

	// Ініціалізація першого табу
	activateTab(0);
});
// ===================================================================
// ===================================================================
// ===================================================================

// Об'єкт, що зіставляє класи (кольори) з шляхами до обох зображень
const imagePath = {
	black: {
		closeup: './images/new-launches/1.png',
		case: './images/new-launches/2.png'
	},
	yellow: {
		closeup: './images/new-launches/1-yellow.png',
		case: './images/new-launches/2-yellow.png'
	},
	blue: {
		closeup: './images/new-launches/1-blue.png',
		case: './images/new-launches/2-blue.png'
	}
};

const colorCircles = document.querySelectorAll('.color-option-button');
const earbudsCloseup = document.getElementById('earbuds-closeup');
const earbudsCase = document.getElementById('earbuds-case');

colorCircles.forEach(circle => {
	circle.addEventListener('click', () => {

		// Видаляємо клас 'active' з усіх елементів
		colorCircles.forEach(c => c.classList.remove('active'));
		circle.classList.add('active');

		const colorClass = Array.from(circle.classList).find(cls => imagePath[cls]);

		if (colorClass) {
			// Оновлюємо src для обох зображень
			earbudsCloseup.src = imagePath[colorClass].closeup;
			earbudsCase.src = imagePath[colorClass].case;
		}
	});
});
// ===================================================================
// ===================================================================
// ===================================================================
