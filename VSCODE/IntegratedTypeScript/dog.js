// @ts-check
import {Animal} from './animal';
export default class Dog extends Animal {
    
    /**
     * Creates an instance of Dog.
     * @param {string} name 
     * @param {number} age 
     * @memberof Dog
     */

    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.favorite_activity = "bark";
    }

    speak(){
        console.log(`${this.name}: No! No more talk! We play ${this.favorite_activity}`);
    }
}

var dog = new Dog('Tashi',5);