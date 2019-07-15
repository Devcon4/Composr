
import * as Router from 'koa-router';
import { EvaluateController } from './controller/evaluateController';
import { IController } from './controller/iController';
import { DefinitionService } from './service/definitionService';
import { EvaluateService } from './service/evaluateService';
import { ModelService } from './service/modelService';
import { IService } from './service/IService';
import { SessionService } from './service/sessionService';
import { sessionController } from './controller/sessionController';
import { UploadController } from './controller/uploadController';
import { ProccessService } from './service/proccessService';
import { UploadService } from './service/uploadService';

class Ioc {
    public router = new Router();
    public controllers :IController[] = [];
    
    public modelService = new ModelService();
    public definitionService = new DefinitionService();
    public evaluateService = new EvaluateService();
    public sessionService = new SessionService();
    public proccessService = new ProccessService();
    public uploadService = new UploadService();

    public services: IService[] = [
        this.modelService,
        this.definitionService,
        this.evaluateService,
        this.sessionService,
        this.proccessService,
        this.uploadService
    ];

    init() {
        this.controllers.push(new EvaluateController());
        this.controllers.push(new sessionController());
        this.controllers.push(new UploadController());
        this.services.forEach(s => s.init());
    }
}

export const ioc = new Ioc();