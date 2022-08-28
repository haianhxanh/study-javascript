const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 8, 24, 23, 59, 59);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`;

// setting up countdown timer
const futureTime = futureDate.getTime(); // get future time

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today; // get the miliseconds until the future time

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24h

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / 1000);

  // set values array
  const values = [days, hours, mins, secs];

  // add 0 to the number if it is less than 10
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown); // stop countdown when the future time is reached
    deadline.innerHTML = `
    <h4 class="expired">the giveaway has expired</h4>
    `;
  }
};

// countdown
// run getRemainingTime() after every second
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
