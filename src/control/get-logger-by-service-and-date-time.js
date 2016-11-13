import LoggerModel from '../entity/logger';
import { GDSUtil } from 'gds-config';
const gdsUtl = new GDSUtil();

export default class GetLoggerByServiceAndDateTime {
    constructor(serviceName, dateFormat, paginate, callback) {
        const dateTime = gdsUtl.getDateRange(dateFormat);
        LoggerModel.paginate({
            serviceName: serviceName,
            createdOn: {
                $gte: dateTime.getStartTime(),
                $lte: dateTime.getEndTime()
            }
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