var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log(" Car Engine started");
    };
    return Car;
}());
var Car1 = new Car("Toyota", "Corolla", 2010);
Car1.start();
// start method which returns void and logs "Engine started" to the console.
// Implement a class named Car that implements the Vehicle interface. The Car class should have:
// A constructor that initializes the make, model, and year properties.
// Implement the start method to log "Car engine started" to the console.
// Create an instance of the Car class and initialize it with some values for make, model, and year.
// Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console.
// Finally, compile your TypeScript code into JavaScript and run it to ensure everything works as expected.
