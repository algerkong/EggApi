module.exports = () => {
    return async function (ctx, next) {
        try {
            let token = ctx.query.token;
            if (token) {
                let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)
                console.log("decode", decode);

                if (decode.username) {
                    let user = await ctx.service.user.findNameUser(decode.username)
                    console.log("user", user);
                    if (user.username = decode.username) {
                        await next()
                    }
                } else {
                    ctx.body = {
                        code: 400,
                        msg: '校验登录失败'
                    }
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '校验登录失败'
                }
            }
        } catch (e) {
            console.log(e);

            ctx.body = {
                code: 400,
                msg: '校验登录失败'
            }
        }
    }
}