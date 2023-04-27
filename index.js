function isLeapYear(year) {
  if ((year % 4 == 0) && ((year % 400 == 0) || (year % 100 !== 0))) {
    return `${year} is leap year`;
  }
  else {
    return `${year} is common year`;
  }
}

module.exports = isLeapYear