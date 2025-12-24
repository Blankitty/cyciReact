import axios from 'axios';
import { useState } from 'react';

export default function Register() {

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [message, setMessage] = useState('');

  function register() {
    axios.post('http://localhost:8080/api/member/register', {
      userId: userId,
      userPw: userPw,
      userNickname: userNickname
    })
    .then(res => {
      setMessage('회원가입 성공');
      console.log(res);
    })
    .catch(err => {
      setMessage('회원가입 실패');
      console.error(err);
    });
  }

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>회원가입</h2>

      <input
        type="text"
        placeholder="아이디"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="비밀번호"
        value={userPw}
        onChange={e => setUserPw(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="닉네임"
        value={userNickname}
        onChange={e => setUserNickname(e.target.value)}
      />

      <br /><br />

      <button onClick={register}>회원가입</button>

      <p>{message}</p>
    </div>
  );
}
