/*
  localStorage
  1.没有时效性，只能手动清除
  2.与服务端不通信
  3.有完整的操作api
    1）getItem(key)
    2) setItem(key,value)
    3) removeItem(key)
    4) clear()
*/
window.onload = function() {
  changeSkin()
  showBtn()
}

// 换肤
function changeSkin() {
  let colorArr = ["white","rgb(204,232,207)", "rgb(200,200,169)", "rgb(114,111,128)"];
  let key = 0
  if (localStorage.getItem('key')) {
    key = localStorage.getItem('key')
  }
  document.body.style.background = colorArr[key]
  document.querySelector('.changeSkin').onclick = function() {
    key = ++key > 3 ? 0 : key
    document.body.style.background = colorArr[key]
    localStorage.setItem('key',key)
  }
}

// 显示按钮
function showBtn() {
  const uls = document.querySelectorAll('.listContainer')
  const spans = document.querySelectorAll('.btnController')
  console.log(uls.length, spans.length);
  uls.forEach((ul,i) => {
    ul.onmouseover = function() {
      spans.forEach((span,j) => {
        if (i === (j + 1)) {
          spans[j].style.display = 'block'
        } else {
          spans[j].style.display = 'none'
        }
      })
    }
  })
}

// 开启详情页
function showDetail(musicData) {
  // 除重
  if (localStorage.getItem('musicData')) {
    let localData = JSON.parse(localStorage.getItem('musicData'))
    console.log(localData, localData.find(item => item.id === musicData.id));
    if(!localData.find(item => item.id === musicData.id)) {
      localData.push(musicData)
      console.log(localData);
      localStorage.setItem('musicData', JSON.stringify(localData))
    }
  } else {
    localStorage.setItem('musicData', JSON.stringify([musicData]))
  }

  // 打开一个详情页
  if (!localStorage.getItem('isOpen')) {
    window.open('/detail')
  }
}
