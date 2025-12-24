import axios from 'axios';
import { useState } from 'react';

export default function Study() {

    const [아이디, set아이디] = useState('');
    const [비밀번호, set비밀번호] = useState('');

    function login() {
        axios.post('http://localhost:8080/api/member/login', {
            userId: 아이디,
            userPw: 비밀번호
        }, {
            withCredentials: true
        })
        .then(res => {
            console.log(res.data); // true / false
            if(res.data) {
                alert('로그인 성공');
            } else {
                alert('로그인 실패');
            }
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h1>로그인</h1>

            <input
                type="text"
                value={아이디}
                onChange={(e) => set아이디(e.target.value)}
                placeholder="아이디"
            />

            <input
                type="password"
                value={비밀번호}
                onChange={(e) => set비밀번호(e.target.value)}
                placeholder="비밀번호"
            />

            <input
                type="button"
                value="로그인"
                onClick={login}
            />
        </div>
    );
}
