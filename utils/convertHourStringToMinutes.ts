import splitHourString from "./splitHourString";

function convertHourStringToMinutes(start: string, current: string) {
  const [startHour, startMinutes] = splitHourString(start);
  const [currentHour, currentMinutes] = splitHourString(current);

  const _startMinutes = startHour * 60 + startMinutes;
  const _currentMinutes = currentHour * 60 + currentMinutes;

  return _currentMinutes - _startMinutes;
}

export default convertHourStringToMinutes;
