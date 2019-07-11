import { ioc } from "../ioc";
import { IController } from "./iController";

export class EvaluateController implements IController {
    constructor() {
        ioc.router.get('/evaluate', ctx => {
            ctx.body = 'Test eval!';
            ctx.response = {'test': 'testVluae'}
        });
    }
}