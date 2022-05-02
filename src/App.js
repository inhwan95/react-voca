import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  const name = "react"
  const naver = {
    name: "네이버",
    url: "https://naver.com"
  };
  return (
    <div className='App'>
      <Hello />
      <div className='box'>App</div>
    </div>
  );
}

export default App;
