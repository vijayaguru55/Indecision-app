class Person {
    constructor(name = 'vijay', age=0) {
        this.name= name;   
        this.age = age;
    }
    getGreetind() {
        return `Hiii ${this.name} !`;

    }
    getDescription() {
        return `${this.name} is ${this.age}  yeras old`;
    }
}

class Students extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }
    hasMajor () {
        return !!this.major;    
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` and Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name,age , homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreetind( ) {
        let greeting = super.getGreetind();
        if(this.homeLocation){
            return `Hii iam ${this.name} . I'am visited here from ${this.homeLocation}.`;
        }
        return greeting;

    }
}

const me = new Traveller('vijayaguru', 21, 'Chennai') ;
console.log(me.getGreetind());
const other = new Traveller('viajy', 20, 'Pudukkottai   ');
console.log(other.getGreetind());