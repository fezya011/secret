// Создание плавающих сердечек
function createHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Случайная позиция
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Случайный размер
        const size = Math.random() * 20 + 10;
        
        // Случайная задержка анимации
        const delay = Math.random() * 5;
        
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.animationDelay = `${delay}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Анимация комплиментов
function animateCompliments() {
    const compliments = document.querySelectorAll('.compliment');
    let index = 0;
    
    // Показываем первый комплимент
    if (compliments.length > 0) {
        compliments[0].classList.add('active');
    }
    
    // Меняем комплименты каждые 3 секунды
    setInterval(() => {
        compliments[index].classList.remove('active');
        
        index = (index + 1) % compliments.length;
        
        compliments[index].classList.add('active');
    }, 3000);
}

// Создание плавающих сердечек при клике
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('floating-heart');
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    document.body.appendChild(heart);
    
    // Удаляем сердечко после анимации
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    animateCompliments();
    
    // Создаем сердечки при клике
    document.addEventListener('click', function(e) {
        createFloatingHeart(e.clientX, e.clientY);
    });
    
    // Создаем несколько сердечек при загрузке
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFloatingHeart(x, y);
        }, i * 500);
    }
});