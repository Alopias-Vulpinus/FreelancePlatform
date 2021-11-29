const Role = require('../models/Role')
const Repository = require('./Repository')

class RoleRepository extends Repository{
    async CreateRoleAsync(name){
        const role = new Role({name});
        const savedRole = await role.save();
        return savedRole;
    }

    async GetAllRoles(){
        const roles =await Role.find({});
        return roles;
    }
}


const repository = new RoleRepository();

Object.freeze(repository);

module.exports = repository;