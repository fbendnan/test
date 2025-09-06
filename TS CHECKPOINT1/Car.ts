interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  constructor(public make: string, public model: string, public year: number) {}
  start(): void {
    console.log(" Car Engine started");
  }
}

let Car1 = new Car("Toyota","Corolla",2010);

Car1.start();
