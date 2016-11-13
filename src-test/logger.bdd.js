import { GDSDatabaseTest } from 'gds-config';
import chai from 'chai';
const expect = chai.expect;
import LoggerService from '../dist/boundary/logger';

describe('Logger Service BDD', () => {

    const db = new GDSDatabaseTest();

    beforeEach(done => {
        return db.connect(done);
    });

    describe('GIVEN: I have created info log', () => {
        let message = 'Hello this is log message';
        let serviceName = 'SampleService';

        describe('WHEN: Saving info log', () => {
            let error;
            beforeEach(done => {
                LoggerService.logInfo(serviceName, message, (err) => {
                    error = err;
                    done();
                });
            }); 
            it('THEN: Message should be saved', () => {
                expect(error).to.be.undefined;
            })
        });
    });
});