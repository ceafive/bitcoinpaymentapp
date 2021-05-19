import * as items from "./items";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { items, sleep };
