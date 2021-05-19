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
}

module.exports = UploadController;
