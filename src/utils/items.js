const listLinks = (links) => {
  const defaultItems = {
    itemName: null,
    iconLeft: null,
    iconRight: null,
    hidden: false,
  };

  return links.map((link) => ({
    ...defaultItems,
    ...link,
  }));
};

export { listLinks };
