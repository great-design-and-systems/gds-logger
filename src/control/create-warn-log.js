import LoggerModel from '../entity/logger';

export default class CreateWarnLog {
    constructor(serviceName, message, callback) {
        LoggerModel.create({
            serviceName: serviceName,
            loggerType: 'WARN',
            message: message
        }, (err) => {
            if (err) {
                console.error(err);
                callback({
                    message: 'Error creating log warning'
                });
            } else {
                callback();
            }
        });
    }
}