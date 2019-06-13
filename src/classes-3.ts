// *** Define a class of Vehicle ***
class Vehicle {
  name: string;
  numPassengers: number;
  hornSound: any;

  constructor(vehicleName: string, passengers: number) {
    this.name = vehicleName;
    this.numPassengers = passengers;
    this.hornSound = 'beep-beep';
  }

  honk() {
    console.log(`${this.name} says ${this.hornSound}`);
  }

  turboBoost(boostLevel: number) {
    console.log(`My ${this.name} is turbo boosted by ${boostLevel} bars!`);
  }
}


// *** Extend a vehicle ***
class Truck extends Vehicle {
  constructor(vehicleName: string, passengers: number) {
    super(vehicleName, passengers);
    this.hornSound = 'HONK-HONK!';  // overrides Vehicle's hornSound
  }

  haul(payload: string) {
    console.log(`hauling a bunch of ${payload}`);
  }
}



// *** Instantiate a Vehicle ***
const hondaCivic = new Vehicle('honda civic', 4);
hondaCivic.honk();
hondaCivic.turboBoost(16);
// hondaCivic.haul('azz');


// *** Instantiate a Truck ***
const fordF150 = new Truck('ford F150', 3);
fordF150.honk();
fordF150.turboBoost(5);
fordF150.haul('dirt');
