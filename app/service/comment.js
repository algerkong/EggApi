const Service = require('egg').Service

class CommentService extends Service {


    //评论添加
    async createComment(body) {
        await this.app.model.Comment.create(body)
        return true
    }

    //获取评论列表
    async getCommentList(body) {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let commentList = await this.app.model.Comment.findAll({
            offset: (page - 1) * count,
            limit: count,
            where: body,
            order: [
                ['created_at', 'DESC']
            ],
        });
        return commentList
    }

    //获取全部评论列表
    async getCommentListAll() {
        let page = 1
        let count = 20
        if (query.page !== undefined && query.count !== undefined) {
            page = parseInt(query.page)
            count = parseInt(query.count)
        }
        let commentList = await this.app.model.Comment.findAll(
            {
                offset: (page - 1) * count,
                limit: count,
                order: [
                    ['created_at', 'DESC']
                ],
            }
        );
        return commentList
    }

    async deleteComment(id) {
        await this.app.model.Comment.destroy({
            where: {
                id
            }
        })
        return true
    }
}


module.exports = CommentService