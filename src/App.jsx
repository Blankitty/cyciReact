import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './page/Main.jsx';
import Calc from './page/Calc.jsx';
import Dark from './page/Dark.jsx';
import StudentInfo from './page/StudentInfo.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/Calc"} element={<Calc />} />
          <Route path={"/Dark"} element={<Dark />} />
          <Route path={"/StudentInfo"} element={<StudentInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
