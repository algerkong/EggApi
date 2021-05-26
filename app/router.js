'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  //登陆
  router.post('/api/login', controller.login.login)
  router.get('/api/login/info', app.middleware.checktoken(), controller.login.info)
  router.get('/api/login/logout', controller.login.logout)

  //首页
  router.get('/api/home/count', controller.home.getAllCount)
  router.get('/api/home/newuser', controller.home.getNewUser)
  router.get('/api/home/daydynamic', controller.home.getDayDynamic)

  //用户接口
  // router.resources('user', '/api/user', app.middleware.checktoken(), controller.user)
  router.resources('user', '/api/user', controller.user)


  //动态接口
  router.resources('dynamic', '/api/dynamic', controller.dynamic)

  //获取用户最多动态数 前二十
  router.get('/api/dynamic/count', controller.home.getUserDynamicCount)

  //动态 评论 用户 图片添加
  router.post('/api/dynamic/addimg', controller.dynamic.addImg)


  //点赞接口
  router.resources('praise', '/api/praise', controller.praise)
  router.get('/api/praise/all', controller.praise.getPraiseList)


  //标签接口
  router.resources('tag', '/api/tag', controller.tag)


  //评论
  router.resources('comment', '/api/comment', controller.comment)

  //订单接口
  router.resources('order', '/api/order', controller.order)
  //接收订单
  router.resources('receiveOrder', '/api/receiveorder', controller.receiveOrder)


  //图片上传接口
  router.post('/api/upload', controller.upload.index)
  //获取全部图片接口
  router.post('/api/img', controller.upload.getImgList)
  //删除图片
  router.delete('/api/img/:id', controller.upload.destory)

  //轮播图接口
  router.resources('banner', '/api/banner', controller.banner)
};
