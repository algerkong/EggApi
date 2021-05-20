'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  //登陆
  router.post('/api/login', controller.login.login)
  router.get('/api/login/info', controller.login.info)
  router.get('/api/login/logout', controller.login.logout)

  //用户接口
  // router.resources('user', '/api/user', app.middleware.checktoken(), controller.user)

  router.resources('user', '/api/user', controller.user)


  //动态接口
  router.resources('dynamic', '/api/dynamic', controller.dynamic)

  //动态 评论 用户 图片添加
  router.post('/api/dynamic/addimg', controller.dynamic.addImg)

  //模糊查询动态
  router.get('/api/dynamic/search', controller.dynamic.getFuzzy)


  //点赞接口
  router.resources('praise', '/api/praise', controller.praise)
  router.get('/api/praise/all', controller.praise.getPraiseList)


  //标签接口
  router.resources('tag', '/api/tag', controller.tag)


  //评论
  router.resources('comment', '/api/comment', controller.comment)
  router.get('/api/comment/all', controller.comment.getCommentList)

  //订单接口
  router.resources('order', '/api/order', controller.order)
  router.get('/api/order/search', controller.order.fuzzyOrder)
  //接收订单
  router.resources('receiveOrder', '/api/receiveorder', controller.receiveOrder)


  //图片上传接口
  router.post('/api/upload', controller.upload.index)
};
