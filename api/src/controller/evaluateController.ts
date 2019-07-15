import { ioc } from "../ioc";
import { IController } from "./iController";
import * as uuid from 'uuid/v1';

export class EvaluateController implements IController {
    constructor() {
        ioc.router.get('/composr/api/beginCreate', ctx => {
            let sessionId = ctx.query['sessionId'];
            let contentId = ctx.query['contentId'];
            let styleId = ctx.query['styleId'];

            if(!sessionId) {
                ctx.throw("Must have SessionId!");
            } else if (!contentId) {
                ctx.throw("Must have contentId!");
            } else if (!styleId) {
                ctx.throw("Must have styleId!");
            }

            let outputId = uuid();

            ioc.proccessService.Run(sessionId, contentId, styleId, outputId);
            ctx.body = outputId;
        });

        ioc.router.get('/composr/api/checkProccess', ctx => {
            let sessionId = ctx.query['sessionid'];
            if(!sessionId) {
                ctx.throw("Must have SessionId!");
            }

            let outputId = ctx.query['outputId'];
            if(!outputId) {
                ctx.throw("Must have outputId!");
            }

            let res = ioc.proccessService.proccessMap.get(sessionId);

            if(res === 'DONE') {
                ctx.body = 'DONE!';
            } else {
                ctx.body = res;
            }


        });
    }
}