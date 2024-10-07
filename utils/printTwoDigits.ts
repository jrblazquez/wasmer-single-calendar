function printTwoDigits(digit: number): string {
  return digit < 9 ? `0${digit}` : `${digit}`;
}
export default printTwoDigits;
