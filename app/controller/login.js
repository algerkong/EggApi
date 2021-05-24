'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        try {
            const body = this.ctx.request.body

            console.log("aaaaaaa", body);
            const data = await this.ctx.service.user.login(body.username, body.password)
            if (data) {
                this.ctx.body = {
                    code: 200,
                    message: "登录成功",
                    token: data.token,
                    data: data
                }
            } else {
                this.ctx.body = {
                    code: 400,
                    message: "账号或密码错误"
                }
            }
        } catch (error) {
            this.ctx.body = {
                code: 400,
                message: "登录失败"
            };
        }
    }

    async info() {
        const { ctx } = this
        try {
            let token = ctx.request.header['token']
            let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)
            let userInfo = await ctx.service.user.findIdUser(decode.id)
            userInfo.roles = "admin"
            userInfo.name = userInfo.nickName
            ctx.body = {
                code: 200,
                message: "获取用户信息",
                data: userInfo
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 400,
                message: "获取失败"
            };
        }
    }

    async logout() {
        const { ctx } = this
        try {
            ctx.body = {
                code: 200,
                message: "退出成功"
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 400,
                message: "失败"
            };
        }
    }
}

module.exports = LoginController;