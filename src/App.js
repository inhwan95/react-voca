import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>

          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;