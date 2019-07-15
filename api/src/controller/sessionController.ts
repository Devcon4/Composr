import { IController } from './iController';
import { ioc } from '../ioc';

export class sessionController implements IController {
    constructor() {
        ioc.router.post('/composr/api/createSession', ctx => {
            let sessionId = ctx.query['sessionId'];

            if(!sessionId) {
                ctx.throw("Must have SessionId!")
            } else if(ioc.sessionService.sessionLookup.has(sessionId)) {
                ctx.throw("SessionId already exists!");
            }

            ioc.sessionService.createSession(sessionId);

            ctx.body = sessionId;
        });
    }
}