'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        try {
            const body = this.ctx.request.body
            const token = await this.ctx.service.user.login(body.username, body.password)
            if (token) {
                this.ctx.body = {
                    code: 200,
                    message: "登录成功",
                    token: token
                }
            } else {
                this.ctx.body = {
                    code: 400,
                    message: "登录失败"
                }
            }
        } catch (error) {
            this.ctx.body = {
                code: 400,
                message: "登录失败"
            };
        }
    }
}

module.exports = LoginController;