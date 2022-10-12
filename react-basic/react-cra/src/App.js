import styles from "./App.module.css";

import Button from "./Button";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
