import CreateInfoLog from '../control/create-info-log';
import CreateDebugLog from '../control/create-debug-log';
import CreateWarnLog from '../control/create-warn-log';
import CreateErrorLog from '../control/create-error-log';
import GetLoggerByServiceName from '../control/get-logger-by-service-nane';
import GetLoggerByServiceAndDateTime from '../control/get-logger-by-service-and-date-time';
import RemoveLoggerByServiceTime from '../control/remove-logger-by-service-time';
export default class LoggerService {
    logInfo(serviceName, message, callback) {
        new CreateInfoLog(serviceName, message, callback);
    }

    logError(serviceName, message, callback) {
        new CreateErrorLog(serviceName, message, callback);
    }

    logWarn(serviceName, message, callback) {
        new CreateWarnLog(serviceName, message, callback);
    }

    logDebug(serviceName, message, callback) {
        new CreateDebugLog(serviceName, message, callback);
    }

    getLogger(serviceName, paginate, callback) {
        new GetLoggerByServiceName(serviceName, paginate, callback);
    }

    getLoggerByTime(serviceName, dateFormat, paginate, callback) {
        new GetLoggerByServiceAndDateTime(serviceName, dateFormat, paginate, callback);
    }
    
    removeLoggerByTime(serviceName, dateFormat, callback) {
        new RemoveLoggerByServiceTime(serviceName, dateFormat, callback);
    }
}