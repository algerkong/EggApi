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

  //获取今日推荐动态

  async getDayDynamic() {
    let query = this.ctx.query
    let page = 1
    let count = 20
    if (query.page !== undefined && query.count !== undefined) {
      page = parseInt(query.page)
      count = parseInt(query.count)
    }

    const dynamicList = await this.app.model.Dynamic.findAndCountAll({
      offset: (page - 1) * count,
      limit: count,
      where: {
        status: 1
      },
      include: [
        {
          model: this.ctx.model.User
        },
        {
          model: this.ctx.model.Img,
          order: [
            ['created_at', 'DESC']
          ],
        },
        {
          model: this.ctx.model.Comment,
          include: [
            {
              model: this.ctx.model.User
            }
          ],
          order: [
            ['created_at', 'DESC']
          ],
        },
        {
          model: this.ctx.model.Tag,
        },
        {
          model: this.ctx.model.Praise,
          include: [
            {
              model: this.ctx.model.User
            }
          ],
          order: [
            ['created_at', 'DESC']
          ],
        }],
      order: [
        ['created_at', 'DESC']
      ],
      distinct: true
    })

    let rows = []
    dynamicList.rows.forEach(element => {
      if (element.imgs.length > 0) {
        rows.push(element)
      }
    });



    this.ctx.body = {
      code: 200,
      msg: '获取成功',
      data: {
        list: rows,
        total: dynamicList.count
      }
    }

  }

}




module.exports = HomeController;
