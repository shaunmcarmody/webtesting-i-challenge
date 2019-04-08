module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item === null || typeof item !== 'object')  return undefined;
  if (!Object.keys(item).includes('enhancement')) return undefined;
  if (item.enhancement < 20) {
    item.enhancement += 1
  }
  return { ...item };
}

function fail(item) {
  if (item === null || typeof item !== 'object')  return undefined;
  const props = Object.keys(item);
  if (!props.includes('enhancement') || !props.includes('durability')) return undefined;
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement >= 15) {
    item.durability -= 10;
  }
  if (item.enhancement > 16) {
    item.enhancement -= 1;
  }
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
