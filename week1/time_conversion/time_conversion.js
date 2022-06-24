function timeConversion(s) {
  const time = s.slice(0, s.length - 2).split(":");
  console.log(time);
  if (s.slice(-2) === "AM" && time[0] == "12") {
    time[0] = "00";
    return time.join(":");
  } else if (s.slice(-2) == "PM") {
    if (time[0] == "12") {
      return time.join(":");
    }
    time[0] = (Number(time[0]) + 12).toString();
    return time.join(":");
  } else return time.join(":");
}
