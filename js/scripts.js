function leapYear (year) {
  var isLeapYear = false;

  if (year%4===0) isLeapYear = true;
  if (year%100===0) isLeapYear = false;
  if (year%400===0) isLeapYear = true;
  return isLeapYear;
}





$(document).ready(function (){
console.log("1993: " + leapYear(1993))
console.log("2004: " + leapYear(2004))
console.log("1900: " + leapYear(1900))
console.log("2000: " + leapYear(2000))
});
