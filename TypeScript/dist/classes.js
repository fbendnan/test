"use strict";
//with constructor
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    info() {
        console.log(`this car is : ${this.brand} , ${this.model} ,${this.year} .`);
    }
}
let car1 = new Car("Toyota", "corolla", 2010);
let car2 = new Car("tesla", "Model 3", 2022);
car1.info();
car2.info();
// Without constructor
class Caar {
    brand = "tesla";
    model = "model 3";
    year = 2022;
    info() {
        console.log(`this car is : ${this.brand} , ${this.model} ,${this.year} .`);
    }
}
let Toyota = new Caar();
Toyota.brand = "Toyota";
Toyota.model = "corolla";
Toyota.year = 2010;
Toyota.info();
class car {
    brand;
    model;
    year;
    capacity;
    constructor(brand, model, year, capacity) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.capacity = capacity;
    }
    info() {
        console.log(`this car is : ${this.brand} , ${this.model} ,${this.year}, ${this.capacity} .`);
    }
}
