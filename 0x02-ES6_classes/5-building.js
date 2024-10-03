class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  // Method to enforce subclass implementation
  evacuationWarningMessage() {
    return `This building has a square footage of ${this.sqft}.`;
  }
}

// Example subclass demonstrating usage
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return `Evacuation Warning: This building has ${this.sqft} sqft.`;
  }
}

// Exporting the Building class
export default Building;

// Using TestBuilding to prevent unused variable error
const myBuilding = new TestBuilding(300);
console.log(myBuilding.evacuationWarningMessage());
