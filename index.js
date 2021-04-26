// first program hello world
console.log("Hello world");
//best function is one with on parameters
// Object Oriented Programming
// Creating Objects
//Factories and constructors
//Primitives and reference types
// Working with properties
//private properties
// Getters/ Setters
//Object Literals
const circle={
    radius:1,// Objects
    location:{// Objects
        x:1,
        y:1
    },
    draw:function(){// method
        console.log('draw')
    }
};
circle.draw();

// defining objects using the factors
function createCircle(radius){
    return{
        radius,
        draw:function (){
            console.log('draw');

        }
    };
}
const circle1=createCircle(1);
circle1.draw()

// how to create the object using the constructors
function Circle2(radius){

}


