const d = document,
    w = window;

const scrollTopButton = (btn) => {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll', (e) => {
        let scrollTop = scrollY;
        if (scrollTop > 300) {
            $scrollBtn.classList.remove('hidden');
        } else {
            $scrollBtn.classList.add('hidden');
        }
        // console.log(pageYOffset, d.documentElement.scrollTop, scrollY);
    });

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }
    })
}

export default scrollTopButton;