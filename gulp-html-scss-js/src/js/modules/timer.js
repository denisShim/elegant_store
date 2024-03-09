function timer(){
    const endDate = new Date('Mar 15, 2024, 23:59:59');
    // endDate.setDate(endDate.getDate() + 3);
    console.log(endDate);
    
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    let timerInterval;
    
    function updateTimer () {
      const now = new Date();
    
      const timeDifference = endDate - now;

      if (timeDifference <= 0) {
        daysElement.innerText = '0';
        hoursElement.innerText = '0';
        minutesElement.innerText = '0';
        secondsElement.innerText = '0';
        clearInterval(timerInterval);
        return;
      }
    
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
      daysElement.innerText = days;
      hoursElement.innerText = hours;
      minutesElement.innerText = minutes;
      secondsElement.innerText = seconds;
    }
    
    updateTimer(); // Запуск таймера при загрузке страницы
    timerInterval = setInterval(updateTimer, 1000); // обновление тамера каждую секунду

}


export default timer;