// Функция для обновления отображения отсчета времени
function updateCountdown() {

    // Устанавливаем дату, к которой нужно выполнить отсчет
    const countdownDate = new Date();
    countdownDate.setHours(0, 0, 0); // Устанавливаем время 00:00:00
    countdownDate.setDate(countdownDate.getDate() + 1); // Устанавливаем следующий день
    countdownDate.setHours(1); // Устанавливаем время 03:00:00

    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Вычисляем оставшееся время в часах, минутах и секундах
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображаем оставшееся время
    document.getElementById("countdown").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Если отсчет закончился, перезапускаем его
    if (distance < 0) {
        clearInterval(interval);
        updateCountdown(); // Запускаем отсчет заново
    }
}

// Обновляем отображение отсчета времени каждую секунду
const interval = setInterval(updateCountdown, 1000);

// Вызываем функцию для начала отсчета сразу после загрузки страницы
updateCountdown();




