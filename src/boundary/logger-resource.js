import LoggerService from './logger';
import { GDSDomainDTO, GDSDomainPaginateHelper } from 'gds-config';
const API = process.env.API_NAME || '/api/logger/';
export default class LoggerResource {
    constructor(app) {
        const loggerService = new LoggerService();
        app.get('/', (req, res) => {
            const domain = new GDSDomainDTO();
            domain.addPost('createInfo', 'http://' + req.headers.host + API + ':serviceName/create-info');
            domain.addPost('createError', 'http://' + req.headers.host + API + ':serviceName/create-error');
            domain.addPost('createWarn', 'http://' + req.headers.host + API + ':serviceName/create-warn');
            domain.addPost('createDebug', 'http://' + req.headers.host + API + ':serviceName/create-debug');
            domain.addGet('getLogger', 'http://' + req.headers.host + API + ':serviceName');
            domain.addGet('getLoggerByTime', 'http://' + req.headers.host + API + ':serviceName/:date');
            res.status(200).send(domain);
        });
        app.post(API + ':serviceName/create-info', (req, res) => {
            const serviceName = req.params.serviceName;
            loggerService.logInfo(serviceName, req.body.message, err => {
                if (err) {
                    res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                        err.message
                    ))
                } else {
                    res.status(200).send(new GDSDomainDTO('LOG_INFO', 'Log info is saved'));
                }
            });
        });

        app.post(API + ':serviceName/create-error', (req, res) => {
            const serviceName = req.params.serviceName;
            loggerService.logError(serviceName, req.body.message, err => {
                if (err) {
                    res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                        err.message
                    ))
                } else {
                    res.status(200).send(new GDSDomainDTO('LOG_ERROR', 'Log error is saved'));
                }
            });
        });

        app.post(API + ':serviceName/create-warn', (req, res) => {
            const serviceName = req.params.serviceName;
            loggerService.logWarn(serviceName, req.body.message, err => {
                if (err) {
                    res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                        err.message
                    ))
                } else {
                    res.status(200).send(new GDSDomainDTO('INFO', 'Log warning is saved'));
                }
            });
        });

        app.post(API + ':serviceName/create-debug', (req, res) => {
            const serviceName = req.params.serviceName;
            loggerService.logDebug(serviceName, req.body.message, err => {
                if (err) {
                    res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                        err.message
                    ))
                } else {
                    res.status(200).send(new GDSDomainDTO('INFO', 'Log debug is saved'));
                }
            });
        });

        app.get(API + ':serviceName', (req, res) => {
            const paginate = new GDSDomainPaginateHelper(req);
            loggerService.getLogger(req.params.serviceName,
                paginate,
                (err, result) => {
                    if (err) {
                        res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                            err.message
                        ))
                    } else {
                        res.status(200).send(new GDSDomainDTO('GET_LOGGER', result));
                    }
                });
        });

        app.get(API + ':serviceName/:date', (req, res) => {
            loggerService.getLoggerByTime(req.params.serviceName,
                req.params.date,
                new GDSDomainPaginateHelper(req),
                (err, result) => {
                    if (err) {
                        res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
                            err.message
                        ))
                    } else {
                        res.status(200).send(new GDSDomainDTO('GET_LOGGER', result));
                    }
                });
        });
    }

}