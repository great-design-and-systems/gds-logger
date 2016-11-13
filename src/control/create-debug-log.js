import LoggerModel from '../entity/logger';

export default class CreateDebugLog {
    constructor(serviceName, message, callback) {
        LoggerModel.create({
            serviceName: serviceName,
            loggerType: 'DEBUG',
            message: message
        }, (err) => {
            if (err) {
                console.error(err);
                callback({
                    message: 'Error creating log error'
                });
            } else {
                callback();
            }
        });
    }
}