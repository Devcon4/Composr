import { IService } from "./IService";
import * as tf from '@tensorflow/tfjs';

export class DatasetService implements IService {
    async init() {

        let model = await tf.loadLayersModel('http://localhost:5000/vgg19/model.json');
        
    }
}