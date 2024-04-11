class personne{
    constructor(name,age,power,rich){
        this.name= name;
        this.age=age;
        this.power=power;
        this.rich=rich;
    }
    getAge(){
        return this.age();
    }
    getInfo(){
        return `"Il s'appele" ${this.name} "a"${this.age} "il peut" ${this.power} ${this.rich ?"il est rich" : "il'est pauvre"}`;
    }
    displayInfo(){
        console.log(personne.getAge);
        console.log(personne.getInfo);
    }
    
}

export default personne;