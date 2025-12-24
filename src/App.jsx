import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './page/Main.jsx';
import Calc from './page/Calc.jsx';
import Dark from './page/Dark.jsx';
import Grades from './page/grades.jsx';
import StudentInfo from './page/StudentInfo.jsx';

import Axios1 from './page/axios/Axios보내기.jsx';

import Login from './page/Member/Login.jsx';
import Register from './page/Member/Register.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/Calc"} element={<Calc />} />
          <Route path={"/Dark"} element={<Dark />} />
          <Route path={"/StudentInfo"} element={<StudentInfo />} />
          <Route path={"/Grades"} element={<Grades />} />
          <Route path={"/axios1"} element={<Axios1 />} />

          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
