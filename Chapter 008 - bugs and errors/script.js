// Task 001 ------------------------------------------------------------------------------

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for(;;){
    try {
      let result = primitiveMultiply(a, b)
      return result
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure))
      throw error;
    }
  }
}

console.log(reliableMultiply(8, 8));

// Task 002 ------------------------------------------------------------------------------

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  let state = box.locked

  if (state === false) {
    return body()
  }

  box.unlock()
  try {
    return body()
  } 
  finally {
    box.lock()
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);