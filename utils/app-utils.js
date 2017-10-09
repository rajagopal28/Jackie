
class AppUtils {
  static getFormattedDateString(date) {
    let d = date ? date : new Date();
    let month = d.getMonth()+1;
    return d.getFullYear()
      + '-' + (month> 9 ? month : '0'+month)
      + '-' + (d.getDate() > 9 ? d.getDate() : '0'+d.getDate())
      + ' ' + (d.getHours() > 9 ? d.getHours() : '0'+d.getHours())
      + ':' + (d.getMinutes() > 9 ? d.getMinutes() : '0'+d.getMinutes())
      + ':' + (d.getSeconds() > 9 ? d.getSeconds() : '0'+d.getSeconds());
  }
  static getPartOfTheDay(date) {
    let d = date ? date : new Date();
    let hours = d.getHours();
    return hours < 12 ? 'Morning' : ( hours < 18 ? 'Noon' : 'Night');
  }
}

export default AppUtils;
