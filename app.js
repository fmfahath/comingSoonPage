  let countDownDate = new Date("Jan 01, 2024 10:00:00").getTime();

  //find date & time difference
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

        //if date passed
        if( timeDiff < 0){
            clearInterval(x);
            document.getElementById('days').innerHTML = "00";
            document.getElementById('hours').innerHTML = "00";
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
        }
        

  }, 1000);



