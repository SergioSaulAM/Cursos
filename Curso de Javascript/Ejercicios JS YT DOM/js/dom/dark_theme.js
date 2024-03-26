const d = document;

const darkTheme = (btn, classDark) => {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll('[data-dark]');

    console.log($selectors);

    let moon = '🌑',
        sun = '☀️';

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                $selectors.forEach(e => e.classList.add('dark-mode'));
                $themeBtn.textContent = sun;
            } else {
                $selectors.forEach(e => e.classList.remove('dark-mode'));
                $themeBtn.textContent = moon;
            }
        }
    })
}

export default darkTheme;