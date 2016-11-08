export default class Array {
  hello (message) {
    let a = message || 'hello world'
    console.log(a)
  }

  // 数组去重
  unique (arr) {
    let result = []
    arr.map(item => {
      result.indexOf(item) === -1 ? result.push(item) : null
    })
    return result
  }

  // 判断是否是数组
  isArray (object) {
    return Object.prototype.toString.call(object) === '[object Array]'
  }
}