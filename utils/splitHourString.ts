function splitHourString(hour: string): number[] {
  const [hours, minutes] = hour.split(":");
  return [Number(hours), Number(minutes)];
}

export default splitHourString;
