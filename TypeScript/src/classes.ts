//with constructor


class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
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
  brand: string = "tesla";
  model: string = "model 3";
  year: number = 2022;
  info() {
    console.log(`this car is : ${this.brand} , ${this.model} ,${this.year} .`);
  }
}

let Toyota = new Caar();
Toyota.brand = "Toyota";
Toyota.model= "corolla";
Toyota.year = 2010;
Toyota.info();


interface Icar {
  brand: string;
  model: string;
  year: number;
}

class car implements Icar  {
 constructor(public brand: string, public model: string, public year: number, public capacity: number) {}

  info() {
    console.log(`this car is : ${this.brand} , ${this.model} ,${this.year}, ${this.capacity} .`);
  }
}

