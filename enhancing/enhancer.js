module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item !== null && typeof item === 'object') {
    return { ...item, durability: 100 };
  } else {
    return undefined;
  }
}

function get(item) {
  return { ...item };
}
