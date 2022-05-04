import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./App.module.css";

function App() {
  const name = "react"
  const naver = {
    name: "네이버",
    url: "https://naver.com"
  };
  return (
    <div className='App'>
      <Hello />
      <Hello />
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
