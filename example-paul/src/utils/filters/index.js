/**
 * @description 將輸入轉為有千分位的字串且保留小數位數
 * @param {*} value 要轉換的值
 * @returns 轉換後資料
 */
export function commafy(value) {
  var reg = /(\d)(?=(\d{3})+\.)/g
  return (value * 1).toFixed(2).replace(reg, '$1,')
}
