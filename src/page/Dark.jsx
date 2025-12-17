import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Dark() {

    const [Dark, setDark] = useState(false)
    const navigate = useNavigate();


    return (
    <>
        <h3>Dark모드</h3>
        <input type="Button" value="Dark모드 변경" onClick={ e=> {
            e.preventDefault();
            setDark(!Dark);
        }}/>

        <h1 style={{backgroundColor: Dark ? 'black' : 'white', color: Dark ? 'white' : 'black'}}>Hello World</h1>
        <h3>Home으로 이동</h3>



        <input type="button" value="Home" onClick={ e=> {
            e.preventDefault();
            window.location.href = "/";
        }}/>

        <input type="button" value="Calc로 이동" onClick={ e=> {
            e.preventDefault();
            navigate('/Calc');
        }}/>
    </>
  )
}
export default Dark