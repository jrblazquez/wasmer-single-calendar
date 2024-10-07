import convertHourStringToMinutes from "./convertHourStringToMinutes";

function createHours(start: string, end: string, step: number) {
  const hours = [];
  const startMinutes = convertHourStringToMinutes(start, start);
  const endMinutes = convertHourStringToMinutes(start, end);

  for (let i = startMinutes; i < endMinutes; i += step) {
    hours.push(i);
  }

  return hours;
}

export default createHours;
