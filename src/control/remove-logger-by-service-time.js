import LoggerModel from '../entity/logger';
import { GDSUtil } from 'gds-config';
const gdsUtl = new GDSUtil();

export default class RemoveLoggerByServiceTime {
    constructor(serviceName, dateFormat, callback) {
        const dateTime = gdsUtl.getDateRange(dateFormat);
        LoggerModel.remove({
            serviceName: serviceName,
            createdOn: {
                $gte: dateTime.getStartTime(),
                $lte: dateTime.getEndTime()
            }
        }, (err) => {
            if (err) {
                callback({
                    message: 'Logs for service ' + serviceName + ' not removed.'
                });
            } else {
                callback(undefined);
            }
        });
    }
}