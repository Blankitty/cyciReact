import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Main() {


  return (
    <>
      <h1>Main</h1>
      <Link to="/Calc">Calc로 이동</Link>
      <br/>
      <Link to="/Dark">Dark로 이동</Link>
    </>
  )
}

export default Main
