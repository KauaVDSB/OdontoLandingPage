document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = [
        ...document.querySelectorAll('.fade-section'),
        ...document.querySelectorAll('.fade-cards'),
        ...document.querySelectorAll('.equipe-carrossel'),
        ...document.querySelectorAll('.footer')
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});
