import Personne from "./maman.js";

class Hero extends Personne{
    constructor(name,age,power,genre,type){
        super(name,age,power);
        this.genre=genre;
        this.type=type;
    }
    getType(){
        return this.type;

    }
}
export default Hero;
