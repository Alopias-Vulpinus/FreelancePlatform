const Skill = require('../models/Skill');
const Repository = require('./Repository')
class SkillRepository extends Repository{
    async CreateSkillAsync(skillName){
        try{
            const skillToSave = new Skill({name:skillName});
            const result = await  skillToSave.save();
            return result;
        }
        catch{
            this.HandleSave();
        }
    }
}