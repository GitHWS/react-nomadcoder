// useEffect는 인자로 들어간 함수를 조건에 따라(의존성 배열에 따라) 실행될 수 있게 도와주는 Hook. 즉, 불필요한 렌더링을 줄일 수 있는 Hook임
// useEffect는 두가지 인자를 가지는데 첫번째는 "조건에 따라 실행하고자 하는 함수", 두번째는 의존성 배열로 첫번째 인자를 어떤 조건에서 실행할지 결정하는 인자임.

import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => (prev += 1));
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 현재 state가 변할때마다 컴포넌트가 다시 렌더링되고 있음. 하지만 state가 변경되어도 최초 렌더링 시에 딱 한번만 렌더링하고 싶을 때는 어떻게 할 수 있을까?
  // useEffect Hook을 사용하면 됨
  // 주로 api로 부터 데이터를 최초 렌더링시에만 받아올 때 주로 사용함
  console.log("🟢 Run all the time.");

  function iRunOnlyOnce() {
    console.log("🔴 Run only once.");
  }

  // 최초 렌더링 시 한번만 실행함, 의존성 배열에 감시할 요소가 없기 때문에 딱 한번만 실행하는 것임
  useEffect(iRunOnlyOnce, []);

  // keyword라는 state를 "감시"하여 이것이 업데이트될때만 실행함
  useEffect(() => {
    console.log("🔵 I run when 'keyword' change!");

    // ❗️ 조건에 만족했을 때 함수를 실행할 수 있음
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("🟣 Search for", keyword);
    // }
  }, [keyword]);

  // counter라는 state를 "감시"하여 이것이 업데이트될때만 실행함
  useEffect(() => {
    console.log("🟡 I run when 'counter' change!");
  }, [counter]);

  // 의존성 배열에는 여러 요소가 들어가도 실행할 수 있음
  // 의존성 배열에 있는 여러 개의 요소 중 하나라도 변경이 될 경우 실행함
  useEffect(() => {
    console.log("🟠 I run when 'counter' and 'keyword' change!");
  }, [counter, keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="search here"
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
