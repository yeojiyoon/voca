import { Route, Routes } from "react-router-dom";
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';

function App() {
  return (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<DayList />}></Route>
      <Route path="/day/:day" element={<Day />}></Route>
      <Route path="*" element={<EmptyPage />}></Route>
    </Routes>
  </div>
  );
}

export default App;
