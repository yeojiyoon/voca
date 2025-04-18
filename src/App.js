import { Route, Routes } from "react-router-dom";
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
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
      <Route path="/create_word" element={<CreateWord />}></Route>
      <Route path="/create_day" element={<CreateDay />}></Route>
      <Route path="*" element={<EmptyPage />}></Route>
    </Routes>
  </div>
  );
}

export default App;
