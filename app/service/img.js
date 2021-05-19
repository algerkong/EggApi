const Service = require('egg').Service

class DynamicService extends Service {
    //图片添加
    async createImg(body) {
        await this.app.model.Img.create(body)
    }


}


module.exports = DynamicService