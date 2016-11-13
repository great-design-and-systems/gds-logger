import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const LoggerSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'Service name is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required.']
    },
    loggerType: {
        type: String,
        required: [true, 'Logger type is required']
    },
    createdOn: { type: Date, default: Date.now }
});

LoggerSchema.plugin(mongoosePaginate);

const LoggerModel = mongoose.model('logger', LoggerSchema);

export default LoggerModel;