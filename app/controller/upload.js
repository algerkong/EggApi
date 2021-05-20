'use strict';

const { Controller } = require('egg')
const fs = require('fs')
const path = require('path')
const pump = require('mz-modules/pump')

class UploadController extends Controller {
    async index() {
        const stream = await this.ctx.getFileStream();
        const fileName = new Date().getTime() + path.extname(stream.fieldname).toLowerCase()
        const target = path.join(this.config.baseDir, 'app/public/uploads', fileName)
        const writeStream = fs.createWriteStream(target)
        await pump(stream, writeStream)
        this.ctx.body = {
            code: 200,
            data: {
                name: fileName,
                file: `/uploads/${fileName}`
            }
        }
        console.log(this.ctx.body);
    }

    async getImgList() {
        try {
            const imgList = await this.ctx.service.img.getImgList()
            this.ctx.body = {
                code: 200,
                message: "获取成功",
                data: imgList
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 400,
                message: "获取失败"
            }
        }
    }

    async destory() {
        try {
            let id = this.ctx.params.id
            await this.ctx.service.img.deleteImg(id)
            this.ctx.body = {
                code: 200,
                message: "删除图片成功"
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 400,
                message: "删除失败"
            }
        }
    }
}

module.exports = UploadController;
