export function taskFirst() {
  // Using const because the value of task doesn't change
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Using let because the value of combination changes
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
