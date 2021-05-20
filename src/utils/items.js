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

const networkCodes = [
  { label: "MTN", value: "MTN" },
  { label: "VODAFONE", value: "VOD" },
  { label: "AIRTEL", value: "AIR" },
  { label: "TIGO", value: "TIG" },
];

const bankCardTypes = [
  { label: "Visa", value: "VISA" },
  { label: "Mastercard", value: "MASTERCARD" },
];

export { listLinks, networkCodes, bankCardTypes };
