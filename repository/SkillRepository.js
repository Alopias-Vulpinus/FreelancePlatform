const Skill = require('../models/Skill');
const Repository = require('./Repository')
class SkillRepository extends Repository{
    async CreateSkillAsync(skillName){
        try{
            const skillToSave = new Skill({name:skillName});
            const result = await  skillToSave.save();
            console.log(`skill screated ${result}`);
            return result;
        }
        catch{
            this.HandleSave();
        }
    }

    async GetAllSkillsAsync(){
        const skills =  await Skill.find({});
        return skills;
    }
}


const repository = new SkillRepository();

Object.freeze(repository);

module.exports = repository;
