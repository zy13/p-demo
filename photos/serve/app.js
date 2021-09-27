const Koa = require('koa')
const app = new Koa()

const KoaRouter = require('koa-router')
const router = new KoaRouter()

const jwt = require('jsonwebtoken')
const kowJwt = require('koa-jwt')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')

const koaConnection = require('./middleware/koa-connection')
const SECRET = 'mytoken'

app.use(koaBody({
  multipart: true,
  formidable: { // 处理fordata数据，文件上传
    uploadDir: __dirname+'/static/upload',
    keepExtensions: true // 保留后缀
  }
}))

// 服务端渲染的静态资源
// app.use(koaStatic(__dirname+'/static'))

// 验证Authorization
app.use(kowJwt({
  secret: SECRET
}).unless({
  path: [/^\/login/,/^\/static/]
}))

// 连接数据库
app.use(koaConnection())

router.get('/photos', async ctx => {
  const [ list ] = await ctx.connection.query(
    'select * from list'
  )
  ctx.body = {
    code: 200,
    list
  }
})

router.post('/upload', async ctx => {
  const { imgs } = ctx.request.files
  const [res] = await ctx.connection.query(
    'insert into list (imgUrl, name, uid) values (?,?,?) ',
    [imgs.path, imgs.name, ctx.state.user.uid]
  )
  if (res) {
    ctx.body = {
      code: 200,
      msg: '操作成功'
    }
  }
})

router.post('/login', async ctx => {
  let loginUser = {
    username: 'abc',
    password: '123',
    uid: 1
  }
  let token = jwt.sign(loginUser, SECRET)
  // ctx.set('Authorization', 'Bearer ' + token)
  ctx.body = {
    code: 200,
    msg: '登录成功',
    token: token
  }
})

app.use(router.routes())

app.listen(3000)