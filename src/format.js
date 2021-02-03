export function getDuration(sec) {
  let time = parseInt(sec, 10);
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if(minutes < 10) {minutes = "0" + minutes}
  if(seconds < 10) {seconds = "0" + seconds}

  return minutes + ":" + seconds;

}


export function getAge(age) {
  let time = parseInt(age, 10)
  let year = Math.floor(time / 31536000000)
  let month = Math.floor((time - (year * 31536000000)) / 2592000000)
  let days = Math.floor((time - (year * 31536000000) - (month * 2592000000))/ 86400000)
  let hours = Math.floor((time - (year * 31536000000) - (month * 2592000000) - (days * 86400000)) / 3600000);

  if(time >= 31536000000) {
    if(year > 1) { return "Fyrir " + year + " árum síðan" }
    return "Fyrir " + year + " ári síðan"
  }
  else if(time > 2592000000) {
    if(month > 1) { return "Fyrir " + month + " mánuðum síðan" }
    return "Fyrir " + month + " mánuði síðan"
  }
  else if(time > 86400000) {
    if(days > 1) { return "Fyrir " + days + " dögum síðan" }
    return "Fyrir " + days + " dagi síðan"
  }
  else if(time > 3600000) {
    if(hours > 1) { return "Fyrir " + hours + " klukkustundum síðan" }
    return "Fyrir " + hours + " klukkustund síðan"
  }
}
