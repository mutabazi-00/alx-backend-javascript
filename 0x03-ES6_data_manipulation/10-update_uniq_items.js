const updateUniqueItems = (map) => {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries in the map
  for (const [item, quantity] of map) {
    // Update quantity if it is 1
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
};

export default updateUniqueItems;
