export default class DateMethod {
  // 获取所有跟今天有关的信息
  getToday () {
    let today = new Date()
    let todayObj = {}
    todayObj.year = today.getFullYear()
    todayObj.month = today.getMonth() + 1
    todayObj.day = today.getDate()
    todayObj.hour = today.getHours()
    todayObj.minute = today.getMinutes()
    todayObj.second = today.getSeconds()
    todayObj.weekend = today.getDay()
    todayObj.tiemStamp = today.getTime()
    return todayObj
  }

  // 获取跟今天比较的任意一天
  getDayFromToday (time) {
    let day = new Date()
    day.setDate(day.getDate() + time)
    let dayObj = {}
    dayObj.year = day.getFullYear()
    dayObj.month = day.getMonth() + 1
    dayObj.day = day.getDate()
    dayObj.hour = day.getHours()
    dayObj.minute = day.getMinutes()
    dayObj.second = day.getSeconds()
    dayObj.weekend = day.getDay()
    dayObj.tiemStamp = day.getTime()
    return dayObj
  }
}
