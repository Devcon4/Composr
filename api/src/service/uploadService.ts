import { IService } from './IService';
import { Context } from 'koa';
import { ioc } from '../ioc';
import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import * as os from 'os';

export class UploadService implements IService {
    init() {
    }

    hasSession(ctx: Context) {
        let sessionId = ctx.query['sessionId'];
        
        if(!sessionId) {
            ctx.throw("SessionId doesn't exist!");
        }else if (!ioc.sessionService.sessionLookup.get(sessionId)) {
            ctx.throw("SessionId doesn't match current sessions!");
        }
    }

    fileUpload(ctx: Context, fileUuid: string) {
        const file = ctx.request.files.file;
        const reader = createReadStream(file.path);
        const stream = createWriteStream(path.join(os.tmpdir(), fileUuid));
        reader.pipe(stream);
        console.log('uploading %s -> %s', file.name, stream.path);
        ctx.body = fileUuid;
    }
}