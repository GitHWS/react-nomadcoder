import { useEffect, useState } from "react";

function App() {
  // 코인 데이터를 받아오지 않았을 때 "Loading..." 문구를 띄우는 State
  const [loading, setLoading] = useState(true);
  // 코인 데이터를 fetch로부터 받는 State
  const [coins, setCoins] = useState([]);

  // 현재 보유한 캐쉬
  const [cash, setCash] = useState(0);

  const onChange = (event) => {
    setCash(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // 데이터를 받음
        setCoins(json);
        // Loading 문구를 제거
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <label htmlFor="myCash">My Cash</label>
      <input
        id="myCash"
        value={cash}
        onChange={onChange}
        type="number"
        placeholder="Write your Cash $$$"
      />
      <br />
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(4)}{" "}
              USD{" - "}
              {Math.round(cash / coin.quotes.USD.price)}개 구매가능
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
