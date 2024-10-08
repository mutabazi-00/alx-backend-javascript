const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize count to 0 if not present
  }

  // Get the current count for the endpoint
  const currentCount = weakMap.get(endpoint);

  // Increment the count
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is 5 or more and throw an error if true
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};

// Export the WeakMap and the queryAPI function
export { weakMap, queryAPI };
