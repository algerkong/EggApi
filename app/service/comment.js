const Service = require('egg').Service

class CommentService extends Service {


    //评论添加
    async createComment(body) {
        await this.app.model.Comment.create(body)
        return true
    }

    //获取评论列表
    async getCommentList(body) {
        let commentList = await this.app.model.Comment.findAll({
            where: body
        });
        return commentList
    }

    //获取全部评论列表
    async getCommentListAll() {
        let commentList = await this.app.model.Comment.findAll();
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