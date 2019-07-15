import { IController } from './iController';
import { ioc } from '../ioc';
import {createReadStream, createWriteStream} from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as uuid from 'uuid/v1';
import { Context } from 'koa';

export class UploadController implements IController {

    public uploadContentMap: Map<string, string> = new Map();
    public uploadStyleMap: Map<string, string> = new Map();

    constructor() {

        ioc.router.post('/composr/api/uploadContent', ctx => {
            let fileUuid = uuid();
            
            ioc.uploadService.hasSession(ctx);

            let sessionId = ctx.query['sessionId'];

            this.uploadContentMap.set(sessionId, fileUuid);
            ioc.uploadService.fileUpload(ctx, fileUuid);
        })
        ioc.router.post('/composr/api/uploadStyle', ctx => {
            let fileUuid = uuid();
            
            ioc.uploadService.hasSession(ctx);

            let sessionId = ctx.query['sessionId'];
            this.uploadStyleMap.set(sessionId, fileUuid);
            ioc.uploadService.fileUpload(ctx, fileUuid);
        })
    }
}
