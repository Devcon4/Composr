import { ioc } from "../ioc";
import { IController } from "./iController";
import { Response } from "node-fetch";

export class EvaluateController implements IController {
    constructor() {
        ioc.router.get('/composr/api/evaluate', ctx => {
            ctx.body = 'Test eval!';
        });
    }
}