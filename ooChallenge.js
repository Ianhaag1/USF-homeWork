class Car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "beep beep";
    }

    toStr(){
        return `this car is is a ${this.make} ${this.model} that was made in ${this.year}`
    }
}

class fourWheel extends Car {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Car {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }

revEngine(){
    return 'vrroom'
}
}

class Garage {
    constructor(cap){
        this.car = [];
        this.cap = capactity
        }

        add(newCar){
            if(!(newCar instanceof Car)){
                return 'only Cars allowed.'
            }
            if(this.Car.length >= this.cap){
                return 'sorry, no more room'
            }
            this.car.push(newCar);
            return 'new car has been added'
        }
}
