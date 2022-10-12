// 고유한 key를 위한 uuid 라이브러리
// 아래처럼 import한 후 key의 값으로 "uuidv4()"를 사용하면 됨
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  // 사용자가 입력한 toDo의 State
  const [toDo, setToDo] = useState("");
  // 사용자가 입력한 toDo들을 모아놓는 State
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // ⭐️ 최신의 state인 toDos에 새로운 toDo를 추가함
    // 전개구문을 이용하여 최신의 state인 toDos를 배열에 유지한 상태로 추가함
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 데이터가 submit되면 빈 문자열로 초기화함
    setToDo("");
  };

  // console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        {/* form 태그 안에 button이 있다면 onClick이나 onSubmit 이벤트를 추가하지 않아도 버튼을 클릭 시 form의 데이터가 submit 처리가 됨 */}
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo) => {
          // uuidv4() - 고유한 key값을 위한 라이브러리 사용
          return <li key={uuidv4()}>{toDo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
