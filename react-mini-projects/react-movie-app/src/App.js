// React-Router-DOM
// 페이지 전환을 위해 사용하는 컴포넌트의 모음집

// 사용할 땐 아래처럼 "react-router-dom"에서 import를 하여 사용해야함
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    // Router > Switch > Route(path) > Route Component
    // Router는 url을 지켜보다 url의 변화가 일어나면 감지하여 업데이트된 url에 해당하는 path로 연결(렌더링)시켜주는 역할을 함
    <Router>
      {/* Switch는 한번에 하나의 Route만 렌더링하기 위해 사용 */}
      <Switch>
        <Route path="/hello">
          <h2>HELLO</h2>
        </Route>
        {/* url이 "/movie"라면 Detail 컴포넌트를 렌더링함 */}
        {/* 해당 path에 ":id"를 추가하여 동적 url을 사용할 수 있음, 반드시 ":"을 적어야만 동적인 url을 이용할 수 있음 */}
        {/* ":"가 없으면 id를 텍스트로 인식함 */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        {/* url이 "/"이라면 Home 컴포넌트를 렌더링함 */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
