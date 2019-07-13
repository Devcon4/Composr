import { IService } from "./IService";
import { ioc } from "../ioc";
import * as tf from '@tensorflow/tfjs';

export class DefinitionService implements IService {
    init() {
        ioc.modelService.model.add(tf.layers.conv2d({
            inputShape: [
                ioc.modelService.datasetWidth,
                ioc.modelService.datasetHeight,
                ioc.modelService.imageDepth],
            kernelSize: 8,
            filters: 8,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'varianceScaling'}));

        ioc.modelService.model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));

        ioc.modelService.model.add(tf.layers.conv2d({
            kernelSize: 5,
            filters: 16,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'varianceScaling'
        }));
        
        ioc.modelService.model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));
    }
}