'use strict';

var _gdsConfig = require('gds-config');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _logger = require('../dist/boundary/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;


describe('Logger Service BDD', function () {

    var db = new _gdsConfig.GDSDatabaseTest();

    beforeEach(function (done) {
        return db.connect(done);
    });

    describe('GIVEN: I have created info log', function () {
        var message = 'Hello this is log message';
        var serviceName = 'SampleService';

        describe('WHEN: Saving info log', function () {
            var error = void 0;
            beforeEach(function (done) {
                _logger2.default.logInfo(serviceName, message, function (err) {
                    error = err;
                    done();
                });
            });
            it('THEN: Message should be saved', function () {
                expect(error).to.be.undefined;
            });
        });
    });
});