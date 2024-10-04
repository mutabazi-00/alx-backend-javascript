export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // No need to re-declare task and task2 inside this block
    // Just update their values directly (but remember we can't reassign `const`)
  }

  return [task, task2];
}
