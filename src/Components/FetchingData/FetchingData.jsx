import React, { useState, useEffect } from "react";

function FetchingData() {
  const [btcData, setBtcData] = useState();
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {btcData ? (
        <div>
          <h1>Current BTC data</h1>
          <p>Time: {btcData.time.updated}</p>
          <h2>BTC/{btcData.bpi.USD.code}: {btcData.bpi.USD.rate_float} &#36;</h2>
          <h2>BTC/{btcData.bpi.GBP.code}: {btcData.bpi.GBP.rate_float} &pound;</h2>
          <h2>BTC/{btcData.bpi.EUR.code}: {btcData.bpi.EUR.rate_float} &euro;</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchingData;
