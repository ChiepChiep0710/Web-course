/*function isWeekend(dateString) {
    // Write code here...
    var day=new Date(dateString);
    if(day.getDay()==0 || day.getDay()==6)
      return true;
    else return false;
  }
  Kiểm tra 1 ngày có p cuối tuần ko */

  /**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  return (toDate.getTime()-fromDate.getTime())/(60*60*1000*24);
}
*/
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  return date.getTime()-n*24*60*60*1000;
}*/

 /* Tính số ms chênh lệch giữa date b và date a
 diffMs("02/10/2019", "10/10/2019")
 */

function diffMs(a, b) {
 // viết code ở đây
 return (new Date(b)).getTime()-(new Date(a)).getTime();
}