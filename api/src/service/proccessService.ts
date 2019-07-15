import { IService } from './IService';
import {PythonShell, Options} from 'python-shell';

export class ProccessService implements IService {
    public proccessMap: Map<string, string> = new Map();

    init() {}

    Run(sessionId: string, contentId: string, styleId: string, outputId: string) {
        
        let options: Options = {
            pythonOptions: ['-u'],
            args: [contentId, styleId, outputId]
        };
        
        PythonShell.run('http://localhost:5000/tensorflowRunner.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            this.proccessMap.set(sessionId, results.pop());
        });
    }

}