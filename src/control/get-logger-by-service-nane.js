import LoggerModel from '../entity/logger';

export default class GetLoggerByServiceName {
    constructor(serviceName, paginate, callback) {
        LoggerModel.paginate({
            serviceName: serviceName
        }, paginate, (err, result) => {
            if (err) {
                callback({
                    message: 'Logs for service ' + serviceName + ' not found.'
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}