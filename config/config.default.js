/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621252608084_9044';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.jwt = {
    secret: 'liujunjie'
  }


  config.cors = {
    origin: "*",
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  // //学校
  // config.sequelize = {
  //   delect: 'mysql',
  //   database: 'photo',
  //   host: 'localhost',
  //   post: 3306,
  //   username: 'photo',
  //   password: 'photo',
  //   timezone: '+08:00'
  // }
  // 公司
  config.sequelize = {
    delect: 'mysql',
    database: 'photo',
    host: 'localhost',
    post: 3306,
    username: 'root',
    password: '123456',
    timezone: '+08:00'
  }
  return {
    ...config,
    ...userConfig,
  };
};
