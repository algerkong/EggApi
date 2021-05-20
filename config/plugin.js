'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },

  cors: {
    enable: true,
    package: 'egg-cors'
  },


  // // 配置 egg-swagger-doc 插件信息。
  // swaggerdoc: {
  //   enable: true, // 是否启用。
  //   package: "egg-swagger-doc", // 指定包名称。
  // },

  jwt: {
    enable: true,
    package: 'egg-jwt'
  },

  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }


};
