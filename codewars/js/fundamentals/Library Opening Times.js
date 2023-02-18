function openingTimes(date) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const openHours = [[12, 16.5], [8, 20], [8, 20], [8, 20], [8, 20], [8, 20], [10, 18]];

  let [day, time] = date.split(' ');
  day = normalizeDay(day);
  if (!isValidDay(day) || !isValidTime(time)) return 'Invalid time!';

  let dayIndex = weekdays.indexOf(day);
  let nextDayIndex = (dayIndex + 1) % 7;
  
  let [hours, minutes] = time.split(':');
  hours = +hours;
  minutes = +minutes;
  let [open, close] = openHours[dayIndex];
  let [openNext, _] = openHours[nextDayIndex];

  if (isOpen(day, hours, minutes)) {
    return `Library closes at ${hoursToTime(close)}`;      
  } else if (hours + minutes / 60 < open) {
    return `Library opens: today ${hoursToTime(open)}`;
  } else {
    const nextDay = weekdays[nextDayIndex];
    return `Library opens: ${nextDay} ${hoursToTime(openNext)}`;
  }

  function isOpen(day, hours, minutes) {
    let dayIndex = weekdays.indexOf(day);
    let [open, close] = openHours[dayIndex];
    return hours + minutes / 60 >= open && hours + minutes / 60 < close;
  }
  
  function hoursToTime(hours) {
    const hoursInt = Math.floor(hours);
    const minutes = Math.round((hours - hoursInt) * 60);
    return `${hoursInt < 10 ? '0' + hoursInt : hoursInt}:${minutes < 10 ? '0' + minutes : minutes}`;
  }
  
  function normalizeDay(day) {
    return day[0].toUpperCase() + day.slice(1).toLowerCase();
  }

  function isValidDay(day) {
    return weekdays.includes(day);
  }

  function isValidTime(time) {
    const [hours, minutes] = time.split(':');
    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
  }
}

console.log(openingTimes("MoNDay 07:59"));