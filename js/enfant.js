import personne from "./maman.js";

class hero extends personne{
    constructor(name,age,power,genre,type){
        super(name,age,power);
        this.genre=genre;
        this.type=type;
    }
    getType(){
        return this.type;

    }
}
export default hero;
