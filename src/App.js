import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  const name = "react"
  const naver = {
    name : "네이버",
    url : "https://naver.com"
  };
  return (
    <div className="App">
      <h1
        style={{
          color: "#f0f",
          backgroundColor : "#ff0"
        }}
      >
        Hello, {name} <p>{2+3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
