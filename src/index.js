import express from 'express';
import { GDSDatabase, GDSServer, GDSServices } from 'gds-config';
import LoggerResource from './boundary/logger-resource';
const app = express();
const PORT = process.env.PORT || 5000;
new GDSServices().initServices((serviceError, result) => {
    new GDSDatabase().connect((errDB) => {
        if (errDB) {
            console.error(errDB);
        } else {
            new GDSServer(app);
            app.listen(PORT, () => {
                new LoggerResource(app);
                console.log('Express is listening to port', PORT);
            });
        }
    });

});

export default app;