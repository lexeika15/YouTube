document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu');
    const sidebar = document.querySelector('.sidebar');

    if(!menuBtn || !sidebar) {
        console.error('Элементы .menu или .sidebar не найдены');
        return;
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if(!menuBtn.contains(e.target) && !sidebar.contains(e.target))
            sidebar.classList.remove('active');
    });
});