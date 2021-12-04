
const Status = require('../models/Status')
const Repository = require('./Repository')


class StatusRepository extends Repository{
    async CreateStatusAsync(name){
        const status = new Status({name});
        const savedStatus = await status.save();
        return savedStatus;
    }

    async GetAllStatusesAsync(){
        const statuses = Status.find({});
        return statuses;
    }
}



const repository = new StatusRepository();

Object.freeze(repository);

module.exports = repository
