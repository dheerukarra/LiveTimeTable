var mon = document.getElementsByClassName('mon');
var tue = document.getElementsByClassName('tue');
var wed = document.getElementsByClassName('wed');
var thu = document.getElementsByClassName('thu');
var fri = document.getElementsByClassName('fri');
var sat = document.getElementsByClassName('sat');
var first = document.getElementsByClassName('first');
var second = document.getElementsByClassName('second');
var third = document.getElementsByClassName('third');
var fourth = document.getElementsByClassName('fourth');
var lunch = document.getElementsByClassName('lunch');
var fifth = document.getElementsByClassName('fifth');
var sixth = document.getElementsByClassName('sixth');
var seventh = document.getElementsByClassName('seventh');
var heading = document.getElementsByClassName('heading');
var container = document.getElementsByClassName('container');
var finished = document.getElementsByClassName('finished');
var time = document.getElementById('time');
var day = document.getElementById('day');
var fin = document.getElementById('fin');
var headtitle = document.getElementById('headtitle');
var d = new Date();
switch (d.getDay()) {
  case 0:
    {
    container[0].style.display = "none";  
    headtitle.innerText="SUNDAY IS A HOLIDAY";
    break;
    }
  case 1:
    {
      for (var i = 0; i < mon.length; i++) {
        mon[i].style.display = "block";
      }
      break;
    }

  case 2:
    {
      for (var i = 0; i < tue.length; i++) {
        tue[i].style.display = "block";
      }
      break;
    }

  case 3:
    {
      for (var i = 0; i < wed.length; i++) {
        wed[i].style.display = "block";
      }
      break;
    }

  case 4:
    {
      for (var i = 0; i < thu.length; i++) {
        thu[i].style.display = "block";
      }
      break;
    }
  case 5:
    {
      for (var i = 0; i < fri.length; i++) {
        fri[i].style.display = "block";
      }
      break;
    }
  case 6:
    {
      for (var i = 0; i < sat.length; i++) {
        sat[i].style.display = "block";
      }
      break;
    }
  default:
    break;
}
setInterval(() => {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  //  var m = 40;
  //  var h = 12;
  var s = d.getSeconds();
  var dd = d.getDay();
  time.innerText = h + " : " + m + " : " + s;

  switch (dd) {
    case 0:
      day.innerText = "Sunday";
      break;
    case 1:
      day.innerText = "Monday";
      break;
    case 2:
      day.innerText = "Tuesday";
      break;
    case 3:
      day.innerText = "Wednesday";
      break;
    case 4:
      day.innerText = "Thursday";
      break;
    case 5:
      day.innerText = "Friday";
      break;
    case 6:
      day.innerText = "Saturday";
      break;

    default:
      break;
  }

  var c;
  if ((h == 8 && m >= 50) || (h == 9 && m <= 40)) {
    c = 0;
  } else if ((h == 9 && m >= 40) || (h == 10 && m < 30)) {
    c = 1;
  } else if ((h == 10 && m >= 30) || (h == 11 && m < 20)) {
    c = 2;
  } else if ((h == 11 && m >= 20) || (h == 12 && m < 10)) {
    c = 3;
  } else if (h == 12 && m >= 10 && m < 50) {
    c = 4;
  } else if ((h == 12 && m >= 50) || (h == 13 && m < 40)) {
    c = 5;
  } else if ((h == 13 && m >= 40) || (h == 14 && m < 30)) {
    c = 6;
  } else if ((h == 14 && m >= 30) || (h == 15 && m < 20)) {
    c = 7;
  } else if ((h == 15 && m >= 20) || (h >= 16 && m >= 0)) {
    c = 8;
  } else if (h <= 8 && m < 50 && dd!=0) {
    c = 9;
  }

  switch (c) {
    case 0:
      {
        for (var i = 0; i < first.length; i++) {
          first[i].style.display = "block";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 1:
      {
        for (var i = 0; i < second.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "block";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 2:
      {
        for (var i = 0; i < third.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "block";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 3:
      {
        for (var i = 0; i < fourth.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "block";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 4:
      {
        for (var i = 0; i < lunch.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "block";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        // heading[0].style.display = "none";
        // container[0].style.display = "none";
        // finished[0].style.display = "flex";
        // fin.innerText = "LUNCH BREAK";
        break;
      }
    case 5:
      {
        for (var i = 0; i < fifth.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "block";
          sixth[i].style.display = "none";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 6:
      {
        for (var i = 0; i < sixth.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "block";
          seventh[i].style.display = "none";
        }
        break;
      }
    case 7:
      {
        for (var i = 0; i < seventh.length; i++) {
          first[i].style.display = "none";
          second[i].style.display = "none";
          third[i].style.display = "none";
          fourth[i].style.display = "none";
          lunch[i].style.display = "none";
          fifth[i].style.display = "none";
          sixth[i].style.display = "none";
          seventh[i].style.display = "block";
        }
        break;
      }
    case 8:
      {
        if (dd!=0) {
          heading[0].style.display = "none";
          container[0].style.display = "none";
          finished[0].style.display = "flex";
        }       
        break;
      }
    case 9:
      {
        if (dd!=0) {
          heading[0].style.display = "none";
          container[0].style.display = "none";
          finished[0].style.display = "flex";
          fin.innerText = "CLASSES COMMENCE FROM 8:50 AM";
        }        
        break;
      }
    default:
      break;
  }

}, 1000);
