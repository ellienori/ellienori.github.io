const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock(); // 우선 처음에 바로 시작하고 그 다음부터 1초씩 되도록
setInterval(getClock, 1000);