// const add = (a,b) => a+b;
// console.log(add(2,6)); 

const add = function (a,b) {
    console.log(arguments);
    return a+b;
}

console.log(add(4,6 ,100,2,));

//this KeyWord no longer bound

const user = {
    name : 'vijayaguru',
    cities : ['chennai','Trichy','Madurai','Salem'],
    printPlacesLived() {
    // function() {
    //     this.cities.forEach( (city) => {
    //     console.log(`${this.name}  has lived in ${city}`);
    // });
    // }   
    return this.cities.map((city) => this.name +' has lived in'+ city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers :[10,40,33],
    multiplyBy :3,
    mutiply() {
       return this.numbers.map((number) => number*this.multiplyBy);
    }
};
console.log(multiplier.mutiply());
