import { IService } from "./IService";
import * as tf from '@tensorflow/tfjs';

export class ModelService implements IService {
    public model = tf.sequential();

    public datasetWidth = 28;
    public datasetHeight = 28;
    public imageDepth = 1;

    init() {
    }

}