import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class (Car) constructor
    this._range = range; // Add the range attribute for EVCar
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override the cloneCar method to return an instance of Car instead of EVCar
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
