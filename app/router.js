'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  //登陆
  router.post('/api/login', controller.login.login)

  //用户接口
  router.resources('user', '/api/user', app.middleware.checktoken(), controller.user)
  //动态接口
  router.resources('dynamic', '/api/dynamic', controller.dynamic)
  //查询动态
  router.get('/api/dynamic/search/:str', controller.dynamic.getFuzzy)

  //点赞接口
  router.resources('praise', '/api/praise', controller.praise)

};
