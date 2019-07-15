import { IService } from './IService';

export class SessionService implements IService {
    // Guid -> Created Date UTC.
    sessionLookup: Map<string, string> = new Map();
    
    init() {}

    createSession(id: string) {
        this.sessionLookup.set(id, new Date().toUTCString());
    }

}