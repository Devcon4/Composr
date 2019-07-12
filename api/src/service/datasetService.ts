import { IService } from "./IService";
import * as tf from '@tensorflow/tfjs';
import fs from 'fs';
import { parse } from 'tfjs-npy';
import * as mobilenet from '@tensorflow-models/mobilenet';

export class DatasetService implements IService {
    async init() {
        const model = await mobilenet.load();
        
        
    }
}