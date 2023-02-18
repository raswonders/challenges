function openingTimes(date) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const openHours = [[12, 16.5], [8, 20], [8, 20], [8, 20], [8, 20], [8, 20], [10, 18]];

  let [day, time] = date.split(' ');
  day = normalizeDay(day);
  const dayIndex = weekdays.indexOf(day);
  const nextDayIndex = (dayIndex + 1) % 7;

  if (isOpen(day, time)) {
    const [_, close] = openHours[dayIndex];
    return `Library closes at ${hoursToTime(close)}`;      
  } else {
    const nextDay = weekdays[nextDayIndex];
    const [open, _] = openHours[nextDayIndex];
    return `Library opens: ${nextDay} ${hoursToTime(open)}`;
  }

  function isOpen(day, time) {
    let dayIndex = weekdays.indexOf(day);
    let [open, close] = openHours[dayIndex];
    let [hours, minutes] = time.split(':');
    hours = +hours;
    minutes = +minutes;
    return hours + minutes / 60 >= open && hours + minutes / 60 < close;
  }
  
  function hoursToTime(hours) {
    const hoursInt = Math.floor(hours);
    const minutes = Math.round((hours - hoursInt) * 60);
    return `${hoursInt}:${minutes < 10 ? '0' + minutes : minutes}`;
  }
  
  function normalizeDay(day) {
    return day[0].toUpperCase() + day.slice(1).toLowerCase();
  }
}

console.log(openingTimes("MoNDay 07:59"));