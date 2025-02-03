import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-02-02/v1/currencies/${currency}.json` //The fetch function is used to make an HTTP request to the specified URL, which returns a promise.
    )
      .then((res) => res.json()) // convert the data to json
      .then((res) => setData(res[currency])); //The second then updates the data state with the currency data from the response.
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
  /*
  In your useCurrencyInfo custom hook, only the data state is returned because it encapsulates the fetched currency information.
  The setData function is used internally within the hook to update the data state and is not needed by the component using the hook.
  */
}

export { useCurrencyInfo };
//pura ka pura mehtod return kardiya
