// useEffect - CleanUp Function
// useEffect를 통해 컴포넌트가 언제 생성(Create)되고 소멸(Destroy)되는지 알 수 있음

import { useEffect, useState } from "react";

function Hello() {
  // state인 showing이 true일 때 Hello 컴포넌트가 렌더링되면서 useEffect의 함수가 실행됨
  // 의존성 배열이 빈 배열이므로 해당 컴포넌트가 최초 렌더링 될때마다 실행됨
  // 현재 버튼 클릭으로 Hello 컴포넌트는 생성(create)와 소멸(destroy)를 반복하고 있음
  useEffect(() => {
    console.log("created 😉");
    // CleanUp Function은 useEffect를 사용한 컴포넌트가 소멸될 때 실행하는 함수임.
    // CleanUp Function은 자주 사용되진 않지만 컴포넌트가 소멸될 때 결과를 보내거나 이벤트 리스너를 지우는 등에 주로 사용됨.
    return () => {
      console.log("destoryed 🤯");
    };
  }, []);

  // 하나의 함수로 CleanUp Function을 사용하고 싶을 때는 아래처럼 하면 됨
  function byeFunc() {
    console.log("Bye :(");
  }

  function hiFunc() {
    console.log("Hello :)");
    // 이 return이 CleanUp Function이 됨
    return byeFunc;
  }

  useEffect(hiFunc, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
