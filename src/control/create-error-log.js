import LoggerModel from '../entity/logger';

export default class CreateErrorLog {
    constructor(serviceName, message, callback) {
        LoggerModel.create({
            serviceName: serviceName,
            loggerType: 'ERROR',
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