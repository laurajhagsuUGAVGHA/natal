document.addEventListener('DOMContentLoaded', function () {
    // Data do Natal (ano/mês/dia)
    const natalDate = new Date('2023-12-25T00:00:00');
  
    function updateCountdown() {
      const currentDate = new Date();
      const difference = natalDate - currentDate;
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }
  
    // Atualiza a contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);
  
    // Chama a função inicialmente para evitar um atraso inicial
    updateCountdown();
  });