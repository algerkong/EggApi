'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getAllCount() {
    const { ctx, app } = this;
    let countList = []
    countList.push({
      name: "用户",
      count: await app.model.User.count()
    })
    countList.push({
      name: "动态",
      count: await app.model.Dynamic.count()
    })
    countList.push({
      name: "评论",
      count: await app.model.Comment.count()
    })
    countList.push({
      name: "点赞",
      count: await app.model.Praise.count()
    })

    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: countList
    }
  }


  //获取用户分组 动态多少 与点赞数
  async getUserDynamicCount() {

    const { Sequelize } = this.app;
    let userCountDynamic = await this.app.model.Dynamic.findAndCountAll({
      include: [
        {
          model: this.ctx.model.User,
        }
      ],
      attributes: ['user_id'],
      group: 'user_id'
    })

    for (let index = 0, len = userCountDynamic.count.length; index < len; index++) {
      userCountDynamic.count[index]['user'] = userCountDynamic.rows[index].user
      // console.log(userCountDynamic.count[index], userCountDynamic.rows[index]);
    }

    delete userCountDynamic.rows;

    var compare = (x, y) => {
      if (x.count < y.count) {
        return 1;
      } else if (x.count > y.count) {
        return -1;
      } else {
        return 0;
      }
    }

    userCountDynamic = userCountDynamic.count.sort(compare).slice(0, 21);
    this.ctx.body = {
      code: 200,
      msg: '获取成功',
      data: userCountDynamic
    }
  }


  //获取最新的二十个用户
  async getNewUser() {
    let userList = await this.ctx.service.user.getUserList()
    this.ctx.body = {
      code: 200,
      msg: '获取成功',
      data: userList
    }
  }

}




module.exports = HomeController;
