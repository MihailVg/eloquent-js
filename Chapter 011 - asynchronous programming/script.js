// Task 001 -------------------------------------------------------------------------------------

async function locateScalpel(nest) {
  let current = nest.name;
  for (;;) {
    let next = await anyStorage(nest, current, "scalpel");
    if (next == current) return current;
    current = next;
  }
}

// Task 002 -------------------------------------------------------------------------------------

// Вообще плохо понял задание, скопированный код из решения вставлять нет смысла