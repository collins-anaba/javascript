class Pet {
    constructor(name, age){
        this.name =name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`
    }
}
class Cat extends Pet {
    constructor(name,age,livesLeft =9){
        super(name, age)
        this.livesLeft=livesLeft
    }
    meow(){
        return 'meowww'
    }
}

class Dog extends Pet {
    woof(){
        return 'meowww'
    }
    eat(){
        return `${this.name} is eating`
    }
}

//super references the class we are extending from
//super calls the constructor from the parent function

