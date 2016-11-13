import LoggerModel from '../entity/logger';

export default class CreateInfoLog {
    constructor(serviceName, message, callback) {
        LoggerModel.create({
            serviceName: serviceName,
            loggerType: 'INFO',
            message: message
        }, (err) => {
            if (err) {
                console.error(err);
                callback({
                    message: 'Error creating log info'
                });
            } else {
                callback();
            }
        });
    }
}