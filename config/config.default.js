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

  // // egg-swagger-doc 配置信息。
  // exports.swaggerdoc = {
  //   dirScanner: './app/controller', // 配置自动扫描的控制器路径。
  //   // 接口文档的标题，描述或其它。
  //   apiInfo: {
  //     title: 'PhotpApi 接口文档',  // 接口文档的标题。
  //     description: 'swagger-ui for NAPI document.',   // 接口文档描述。
  //     version: '1.0.0',   // 接口文档版本。
  //   },
  //   schemes: ['http', 'https'], // 配置支持的协议。
  //   consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
  //   produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
  //   securityDefinitions: {  // 配置接口安全授权方式。
  //     // apikey: {
  //     //   type: 'apiKey',
  //     //   name: 'clientkey',
  //     //   in: 'header',
  //     // },
  //     // oauth2: {
  //     //   type: 'oauth2',
  //     //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
  //     //   flow: 'password',
  //     //   scopes: {
  //     //     'write:access_token': 'write access_token',
  //     //     'read:access_token': 'read access_token',
  //     //   },
  //     // },
  //   },
  //   enableSecurity: false,  // 是否启用授权，默认 false（不启用）。
  //   // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
  //   routerMap: true,    // 是否启用自动生成路由，默认 true (启用)。
  //   enable: true,   // 默认 true (启用)。
  // };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    origin: ctx => ctx.get('origin'),
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.jwt = {
    secret: 'liujunjie'
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
    timezone: '-08:00'
  }

  return {
    ...config,
    ...userConfig,
  };
};
