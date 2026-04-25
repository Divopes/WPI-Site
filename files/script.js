// Функция открытия модального окна
function showModal(title, htmlContent) {
    const modal = document.getElementById('infoModal');
    const titleEl = document.getElementById('modalTitle');
    const contentEl = document.getElementById('modalContent');

    // Вставляем переданный текст
    titleEl.innerText = title;
    contentEl.innerHTML = htmlContent;

    // Показываем окно
    modal.classList.add('active');
}

// Функция закрытия модального окна
function closeModal(event) {
    // Закрываем только если кликнули по темному фону или по крестику
    if (event.target.id === 'infoModal' || event.target.classList.contains('close-btn')) {
        document.getElementById('infoModal').classList.remove('active');
    }
}

// Функция копирования полного хеша
function copyToClipboard(buttonElement) {
    // 1. Достаем полный хеш из атрибута data-hash
    const fullHash = buttonElement.getAttribute('data-hash');

    // 2. Копируем в буфер обмена браузера
    navigator.clipboard.writeText(fullHash).then(() => {

        // 3. Делаем визуальный эффект (меняем иконку на галочку)
        const icon = buttonElement.querySelector('i');
        const originalClass = icon.className; // Запоминаем старую иконку

        icon.className = 'fa-solid fa-check'; // Ставим галочку
        buttonElement.classList.add('success'); // Красим в зеленый

        // 4. Через 2 секунды возвращаем всё обратно
        setTimeout(() => {
            icon.className = originalClass;
            buttonElement.classList.remove('success');
        }, 2000);

    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        alert('Не удалось скопировать хеш!');
    });
}

// Эффект "нажатия" для всех кнопок-ссылок
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a.btn-download, a.btn-small').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // e.preventDefault(); // Раскомментируй, если ссылки пока пустые (с решеткой #)
            this.style.transform = "scale(0.95)";
            setTimeout(() => this.style.transform = "scale(1)", 150);
        });
    });
});