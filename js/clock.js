const clock = document.querySelector(".js-clock");

function christmasCountDown() {
  const currentDate = new Date();
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

  const christmasDday = christmasDate - currentDate;
  const days = String(
    Math.floor(christmasDday / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const hours = String(
    Math.floor((christmasDday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(0, "2");
  const minutes = String(
    Math.floor((christmasDday % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((christmasDday % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

christmasCountDown();
setInterval(christmasCountDown, 1000);
