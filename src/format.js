export function getDuration(sec) {
  const time = parseInt(sec, 10);
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }

  return `${minutes}:${seconds}`;
}

export function getAge(age) {
  const now = new Date();
  const time = parseInt(age, 10);
  const year = Math.floor((now - time) / 31536000000);
  const month = Math.floor((now - time) / 2592000000);
  const days = Math.floor((now - time) / 86400000);
  const hours = Math.floor((now - time) / 3600000);

  let svar = '';
  if (hours > 0) {
    if (hours > 1) {
      svar = `Fyrir ${hours} klukkustundum síðan`;
    } else {
      svar = `Fyrir ${hours} klukkustund síðan`;
    }
  }
  if (days > 0) {
    if (days > 1) {
      svar = `Fyrir ${days} dögum síðan`;
    } else {
      svar = `Fyrir ${days} dagi síðan`;
    }
  }
  if (month > 0) {
    if (month > 1) {
      svar = `Fyrir ${month} mánuðum síðan`;
    } else {
      svar = `Fyrir ${month} mánuði síðan`;
    }
  }
  if (year > 0) {
    if (year > 1) {
      svar = `Fyrir ${year} árum síðan`;
    } else {
      svar = `Fyrir ${year} ári síðan`;
    }
  }
  return svar;
}
