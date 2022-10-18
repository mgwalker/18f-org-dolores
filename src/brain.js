const brain = new Map();

const get = (key) => brain.get(key);

const set = async (key, value) => {
  brain.set(key, value);
};

const initialize = async () => {};

module.exports = { initialize, get, set };
