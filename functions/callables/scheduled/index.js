const axios = require("axios").default;
const admin = require("firebase-admin");
const functions = require("firebase-functions");

exports.fetchCoinMarketCapPrices = functions.pubsub
  .schedule("0 8 * * *")
  .timeZone("Africa/Accra")
  .onRun(async (context) => {
    console.log({ context });

    const options = {
      method: "GET",
      url: functions.config().cmc.url,
      params: { start: "1", limit: "5", convert: "USD" },
      headers: {
        "content-type": "application/json",
        "accept-encoding": "gzip",
        "x-cmc_pro_api_key": functions.config().cmc.apikey,
      },
    };

    return axios
      .request(options)
      .then(async function (response) {
        const data = response.data;
        console.log(data);
        await admin.firestore().collection("utils").doc("coinMarketCapData").set({ latest: data.data, status: data.status });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
