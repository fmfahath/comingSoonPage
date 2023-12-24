  let countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();

  let x  = setInterval(() => {
        let dateNow = new Date().getTime();
        let timeDiff = countDownDate - dateNow;   

        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); 
        let sec = Math.floor((timeDiff % (1000 * 60)) / (1000)); 

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;

  }, 1000);


