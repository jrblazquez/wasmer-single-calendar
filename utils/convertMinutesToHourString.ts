import printTwoDigits from "./printTwoDigits";
import splitHourString from "./splitHourString";

function convertMinutesToHourString(start: string, current: number) {
  const [startHour, startMinutes] = splitHourString(start);
  let currentHours = startHour + Math.floor(current / 60);
  let currentMinutes = startMinutes + (current % 60);

  if (currentMinutes >= 60) {
    currentHours += Math.floor(currentMinutes / 60);
    currentMinutes = currentMinutes % 60;
  }

  const isOclock = currentMinutes === 0;
  const suffix = currentHours >= 12 ? "pm" : "am";
  const currentHoursto12 = currentHours > 12 ? currentHours - 12 : currentHours;

  return [
    `${printTwoDigits(currentHoursto12)}:${printTwoDigits(currentMinutes)}`,
    isOclock,
    suffix,
  ];
}

export default convertMinutesToHourString;
