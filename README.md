# p-demo
project-demo about front-end

## 1-算法
- 栈
- 队列
- 链表
- 位图
- 树
- 堆
- 哈夫曼树
- 二叉搜索树
- AVL树

## 2-客户端存储
- 项目案例 - music
  - 说明：实现一个简单的音乐歌曲的收藏表单
  - 技术栈：服务端渲染，koa框架，pug模板，md5插件，静态资源管理
  - 登录页
    - 账号密码加密验证：md5插件加密, 服务端cookie
    - 记住我功能
  - 音乐列表
    - 换肤功能：客户端cookie持久化; localStorage
    - 添加音乐功能：使用localStorage存储歌单，通过监听storge事件无刷新获取歌单，
  - 详情页
    - 页面只在一个窗口打开，通过监听beforeunload事件实现
    - 删除选中的歌单，更新localStorage的数据
    - 清除歌单
  
## 3-vue-项目

### photos
- 说明：实现相册功能，需要用户权限登录查看  
- 技术栈：
 - 客户端：vue&vue-router&vuex综合应用
 - mysql存储数据
 - koa框架
- 登录页
- 相册列表：图片的添加和删除