export default class ExampleClass {
    constructor() {
        console.log("Class Constructed");
    }

    spreadExample() {
        let a = [1,2,3];
        let b = [4,5,6];
        return [...a, ...b, 7, 8 , 9];
    }
}