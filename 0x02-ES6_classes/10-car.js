class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    const Constructor = this.constructor; // Get the constructor of the current class
    return new Constructor(this._brand, this._motor, this._color);
  }
}

// Export the Car class
export default Car;
