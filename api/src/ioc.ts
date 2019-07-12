import Router from 'koa-router';
import { EvaluateController } from './controller/evaluateController';
import { IController } from './controller/iController';
import { DefinitionService } from './service/definitionService';
import { EvaluateService } from './service/evaluateService';
import { TrainingService } from './service/trainingService';
import { ModelService } from './service/modelService';
import { IService } from './service/IService';
import { DatasetService } from './service/datasetService';

class Ioc {
    public router = new Router();
    public controllers :IController[] = [];
    
    public modelService = new ModelService();
    public definitionService = new DefinitionService();
    public evaluateService = new EvaluateService();
    public trainingService = new TrainingService();
    public datasetService = new DatasetService();

    public services: IService[] = [
        this.modelService,
        this.definitionService,
        this.evaluateService,
        this.trainingService,
        this.datasetService
    ];

    init() {
        this.controllers.push(new EvaluateController());
        this.services.forEach(s => s.init());
    }
}

export const ioc = new Ioc();