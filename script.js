document.addEventListener('DOMContentLoaded', function() {

    // === تمييز رابط القسم النشط عند التمرير ===
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav__list a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLink.classList.add('active-link');
                }
            } else {
                if (navLink) {
                    navLink.classList.remove('active-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    // === تأثير ظهور الأقسام عند التمرير للأسفل ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    // مراقبة كل الأقسام
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});
    // === نسخ الإيميل عند الضغط ===
    const emailElement = document.getElementById('copyEmail');

    if (emailElement) {
        emailElement.addEventListener('click', function () {
            const email = this.textContent;
            navigator.clipboard.writeText(email)
                
        });
    }