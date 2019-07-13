<<<<<<< HEAD
import * as Router from 'koa-router';
import { EvaluateController } from './controller/evaluateController';
import { IController } from './controller/iController';
import { DefinitionService } from './service/definitionService';
import { EvaluateService } from './service/evaluateService';
import { TrainingService } from './service/trainingService';
import { ModelService } from './service/modelService';
import { IService } from './service/IService';
import { DatasetService } from './service/datasetService';
=======
import Router from 'koa-router';
import { EvaluateController } from './controller/evaluateController';
import { IController } from './controller/iController';
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6

class Ioc {
    public router = new Router();
    public controllers :IController[] = [];
<<<<<<< HEAD
    
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
=======

    init() {
        this.controllers.push(new EvaluateController())
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
    }
}

export const ioc = new Ioc();