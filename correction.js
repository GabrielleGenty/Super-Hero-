class Human {
    constructor(name, age, rich){
        this.name = name;
        this.age = age;
        this.rich = rich;
     
    }

    getAge(){
        return this.age; 
    }   

    displayAge(){
        console.log(this.age);
    }

    getInfos(){ // condition ? true : false
        return `Son prénom est ${this.name}, il/elle a ${this.age} ans. ${this.rich ? "t'es blindax" : "smicard"} `;    
    }

}

class SuperHuman extends Human  {
    constructor(name, age, power){
        super(name, age);
        this.power = power;
    }

}

const lois = new Human("Lois", 30);
const superman = new SuperHuman("Clark", 35, "Fly");
const batman = new Human("Bruce", 35, false);

lois.displayAge();
console.log(superman.getAge());
console.log(batman.getInfos());