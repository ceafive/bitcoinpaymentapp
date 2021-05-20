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

const networkCodeData = {
  MTN: {
    name: "MTN",
    uri: "https://banner2.cleanpng.com/20180807/bs/kisspng-logo-mtn-ivory-coast-brand-product-design-mtn-grou-clients7-5b6a532a34f317.7185509615336947622169.jpg",
  },
  VOD: {
    name: "VODAFONE",
    uri: "https://play-lh.googleusercontent.com/N_CHa0A5TzzGiSGhYJTDNtib-r2jXEUwvuq0mgmbwFQfE6z302wKLa9aowjPSo4a8HA",
  },
  AIR: { name: "AIRTEL", uri: "https://play-lh.googleusercontent.com/8EcA8sbSO5c8x9YQ-AYh7CSumXIlc3lPHPL00mQoaoBa6-Y1qrEV8M4b3bU4WCme_Q" },
  TIG: { name: "TIGO", uri: "https://play-lh.googleusercontent.com/8EcA8sbSO5c8x9YQ-AYh7CSumXIlc3lPHPL00mQoaoBa6-Y1qrEV8M4b3bU4WCme_Q" },
};

const bankCardData = {
  VISA: {
    name: "VISA",
    uri: "https://lh6.ggpht.com/dQ72DEJqMAPT9X8W90gV45UKmGfEDghc2T4ARnWO3kyjPRaP3X00YLs696LRRyHyoGk=h800",
  },
  MASTERCARD: {
    name: "MASTERCARD",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGS68HGBEbUvi1keG0QFFk8N0GNmykrFCU6FwvhXOV_tcNIEU54LABLCyVBK1GeXEFpsk&usqp=CAU",
  },
};

export { listLinks, networkCodes, bankCardTypes, networkCodeData, bankCardData };
