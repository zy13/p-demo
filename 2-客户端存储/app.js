const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaViews = require('koa-views')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const md5 = require('md5')

const musicData = require('./data/music.json')

const app = new Koa()
const router = new KoaRouter()

app.use(koaViews(__dirname+'/views', {
  map: {
    html: 'pug'
  }
}))
app.use(koaStatic(__dirname+'/static'))
app.use(koaBody())

router.get('/login', async ctx => {
  const isLogin = ctx.cookies.get('isLogin')
  if (isLogin) {
    const serverData = md5('abc'+'123')
    if (isLogin === serverData) {
      await ctx.redirect('/list')
    }
  }
  await ctx.render('login.pug')
})

router.get('/list', async ctx => {
  await ctx.render('list.pug', {
    musicData
  })
})

router.get('/detail', async ctx => {
  await ctx.render('detail.pug')
})

router.get('/error',async ctx => {
  await ctx.render('error.pug')
})

router.post('/checkUser',async ctx => {
  const {username,pwd, memberMe} = ctx.request.body
  if (username === 'abc' && pwd === '123') {
    if (memberMe) {
      const isLogin = md5('abc' + '123')
      ctx.cookies.set('isLogin',isLogin, {
        maxAge: 3600*1000*24*7
      })
    }
    ctx.redirect('/list')
  } else {
    ctx.redirect('/error')
  }
})

app.use(router.routes())
app.listen(3000)