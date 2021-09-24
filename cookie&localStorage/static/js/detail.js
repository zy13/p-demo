// 存储开启状态
localStorage.setItem('isOpen', true)

//当页面关闭时候清除开启状态；
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('isOpen')
})

// 监听本地存储的变化
window.addEventListener('storage', () => {
  // 更新视图
  updateView()
})

window.onload = function() {
  updateView()

  //清空勾选项；
  document.querySelector(".deleteItem").onclick = function(){
    let inputs  =document.querySelectorAll(".exchange input");
    let musicData = localStorage.getItem("musicData");
    musicData  = JSON.parse(localStorage.getItem("musicData")) || [];
    inputs.forEach((v,k)=>{
      if(v.checked){
        let id = v.dataset['id']
        let item = musicData.find(item => item.id === id)
        musicData.splice(musicData.indexOf(item),1);
      }
    })
    localStorage.setItem("musicData",JSON.stringify(musicData));
    updateView();
  }

  // 清空列表
  document.querySelector('.deleteAll').onclick = function() {
    localStorage.removeItem('musicData')
    updateView();
  }
}

function updateView(){
  let musicData = localStorage.getItem("musicData");
  if(musicData){
      musicData = JSON.parse(musicData);
      let innerContent = "";
      musicData.forEach(v=>{
          let str = `<ul class="myul">
                      <input type="checkbox" data-id=${v.id} />
                      <li>${v.songName}</li>    
                      <li>${v.singer}</li>  
                      <li>${v.time}</li>          
                     </ul>`;
          innerContent+=  str;
      })
      document.querySelector(".exchange").innerHTML = innerContent;
  }else{
      document.querySelector(".exchange").innerHTML = "";
  }
}