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

const crypoCoinsData = {
  BTC: {
    name: "Bitcoin",
    symbol: "BTC",
    uri: "https://bitcoin.org/img/icons/opengraph.png?1621091491",
  },
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    uri: "data:image/png;base64,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",
  },
  USDT: {
    name: "Tether",
    symbol: "USDT",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfZAu_tCWAi3Hy3H3ac-R5t9-hIherdacCXzBR4WS_jDhvH1UOnDhMqHSOBGoWLJzbDE&usqp=CAU",
  },
  ADA: {
    name: "Cardano",
    symbol: "ADA",
    uri: "https://images.exchangerates.org.uk/uploads/cardano-2.png",
  },
  BNB: {
    name: "Binance Coin",
    symbol: "BNB",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9NpZSf_FwI04F_a59q4R0U4eIC8FSfxF3f5vt_5pQglEZPCb8wAp-xv42pvG_V9a7hw&usqp=CAU",
  },
};

export { listLinks, networkCodes, bankCardTypes, networkCodeData, bankCardData, crypoCoinsData };
