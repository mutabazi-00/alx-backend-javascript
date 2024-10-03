class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = value;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = value;
  }

  // Override valueOf to cast the instance to a Number
  valueOf() {
    return this.size; // Returns the size when cast to a Number
  }

  // Override toString to cast the instance to a String
  toString() {
    return this.location; // Returns the location when cast to a String
  }
}

export default HolbertonClass;
