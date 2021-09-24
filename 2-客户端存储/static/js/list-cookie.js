/*
  浏览器端的cookie
  0. 通过document.cookie获取所有cookie
  1. 如果不设置过期时间，那么用户退出浏览器时，cookie就会失效
  2. 如果设置了过期时间，那么cookie就会在过期时间后失效
  3. cookie会和服务端进行通信，也就是每次发送请求时，请求头都会带上所有的cookie
  4. 没有对应的api进行cookie的存取操作，只能自己封装
*/
window.onload = function() {
  let colorArr = ["white","rgb(204,232,207)", "rgb(200,200,169)", "rgb(114,111,128)"];
  let key = 0
  if(getCookie('key')) {
    key = getCookie('key')
  }
  document.body.style.background = colorArr[key]
  document.querySelector('.changeSkin').onclick = function() {
    key = ++key > 3 ? 0 : key
    document.body.style.background = colorArr[key]
    setCookie('key',key, {
      "Max-Age": 3600 * 24
    })
  }
}

// 设置cookie
function setCookie(name, value, options = {}) {
  let cookieData = `${name} = ${value};`
  for(let key in options) {
    console.log(key, );
    let str = `${key} = ${options[key]};`
    cookieData += str
  }
  document.cookie = cookieData
}

// 获取cookie
function getCookie(name) {
  let arr = document.cookie.split('; ')
  for(let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('=')
    if (arr2[0] === name) {
      return arr2[1]
    }
  }
  return ''
}