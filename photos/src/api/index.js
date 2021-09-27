import http from '../utils/http'

export function apiLogin ({ username, password }) {
  // return new Promise(resolve => {
  //   const xhr = new XMLHttpRequest()
  //   xhr.open('post', '/api/login')
  //   xhr.send(JSON.stringify({
  //     username,
  //     password
  //   }))
  //   xhr.onload = function () {
  //     resolve(JSON.parse(xhr.responseText))
  //   }
  // })
  return http.post('/login')
}

export function apiGetPhotos () {
  return http.get('/photos')
}

export function apiUpload (file) {
  const formdata = new FormData()
  formdata.append('imgs', file)
  return http.post('/upload', formdata)
}
