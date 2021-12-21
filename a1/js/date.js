function updateTime() {
    var dateInfo = new Date();
  /* 
    // time - make 24hr
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      hrs = (dateInfo.getHours() < 10) ? "0" + dateInfo.getHours() : dateInfo.getHours();
  
    var currentTime = hrs + ":" + _min + ":" + sec;
  
    // print time
    document.getElementsByClassName("time")[0].innerHTML = currentTime; */
  
    // date 
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + " " + day + numberSuffix(day) + " " + month[dateInfo.getMonth()] + " " + dateInfo.getFullYear()
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  };
  
  // print time and date once, then update every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);
  
    // add number suffix
  function numberSuffix(theNumber) {
  
      var suffix;	
  
    if (theNumber == 1 || theNumber == 21 || theNumber == 31) {
      suffix = "st";
      }
      else if (theNumber == 2 || theNumber == 22) {
          suffix = "nd";
      }
      else if (theNumber == 3 || theNumber == 23) {
          suffix = "rd";
      }
      else {
          suffix = "th";
      }
      
      return suffix;
  }