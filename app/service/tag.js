const Service = require('egg').Service

class TagService extends Service {


    //标签添加
    async createTag(body) {

        if (await this.getIsTag(body.name)) {
            await this.app.model.Tag.create(body)
            return true
        } else {
            return false
        }


    }


    async getIsTag(name) {
        let isTag = await this.app.model.Tag.findOne({
            where: {
                name
            }
        })

        if (isTag) {
            return false
        } else {
            return true
        }
    }

    async getTagList() {
        let tagList = await this.app.model.Tag.findAll();
        return tagList
    }

    async deleteTag(id) {
        await this.app.model.Tag.destroy({
            where: {
                id
            }
        })
        return true
    }


    async updateTag(id, body) {
        await this.app.model.Tag.update(body, {
            where: {
                id
            }
        })
        return true
    }


}


module.exports = TagService