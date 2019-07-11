import Router from 'koa-router';
import { EvaluateController } from './controller/evaluateController';
import { IController } from './controller/iController';

class Ioc {
    public router = new Router();
    public controllers :IController[] = [];

    init() {
        this.controllers.push(new EvaluateController())
    }
}

export const ioc = new Ioc();