const clock = document.getElementById("clock");
const futureTime = new Date(2022, 5, 16, 0, 0, 0, 0);
const currentTime = new Date();

let month = futureTime.getMonth() - currentTime.getMonth();
let day = futureTime.getDate() - currentTime.getDate();
let hour = futureTime.getHours() - currentTime.getHours();
let minute = futureTime.getMinutes() - currentTime.getMinutes();
let second = futureTime.getSeconds() - currentTime.getSeconds();

if (hour < 0) {
    hour = futureTime.getHours() + 24 - currentTime.getHours();
}
if (minute < 0) {
    minute = futureTime.getMinutes() + 60 - currentTime.getMinutes();
}
if (second < 0) {
    second = futureTime.getSeconds() + 60 - currentTime.getSeconds();
}

const time = setInterval(function Time() {
  clock.innerHTML = `${month} Tháng - ${day} Ngày - ${hour} Giờ - ${minute} Phút - ${second}s`;

  second--;

  if (second < 0) {
    minute--;
    second = 59;
  }

  if (minute < 0) {
    hour--;
    minute = 59;
  }

  if (hour < 0) {
    day--;
    hour = 23;
  }

  if (day < 0) {
    month--;
    day = 30;
  }

  if (month < 0) {
    clearInterval(time);
  }
}, 1000);
