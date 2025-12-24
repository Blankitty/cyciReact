import  axios from 'axios';
import { useState } from 'react';

export default function Study() {

    const [리스트, set리스트] = useState([]);

    function test1() {
        axios.get('http://localhost:8080/test1')
        .then(res => {
            console.log(res);
        });
    }

    function test2() {
        axios.get('http://localhost:8080/data1', {params:{'text':'hello'}})
        .then(res => {
            console.log(res);
        })
    }
    function post1() {
        axios.get('http://localhost:8080/data2', {params:{name: 'aaa',age: 20}})
        .then(res => {
            console.log(res);
        })
    }
    function res1() {
        axios.get('http://localhost:8080/res1', {params:{name: 'aaa',age: 20}})
        .then(res => {
            console.log(res);
        })
    }
    function test4() {
        axios.get('http://localhost:8080/data3', {params:{'num1': 10, 'num2' : 5}})
        .then(res => {
            console.log(res);
        })
    }


    function boardList() {
        axios.get('http://localhost:8080/api/board/list')
        .then(res => {
            console.log(res);
            if(res.status !== 200) {
                console.log('error')
            }
            const list = res.data;
            console.log(list);
            set리스트(list);

        })
    }

    // const handleLogin = () => {
    // const dataDTO = { name, age };
    // axios.post('http://localhost:8080/login', dataDTO)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
    // };

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');





    return (
        <div>
            <h1>Axios 사용해보기</h1>
            <input type="button" value="axios보내기1"
                onClick={test1} />
            <input type="button" value="axios보내기2"
                onClick={test2} />

            <input type="text" value="name" onChange={ e => {
                e.preventDefault();
                setName(e.target.value);

            }}/>
            <input type="text" value="age" onChange={ e => {
                e.preventDefault();
                setAge(e.target.value);

            }}/>
            <input type="button" value="axios보내기3"
                onClick={post1} />
            
            <input type="button" value="axios보내기4"
                onClick={test4} />

            <input type="button" value="axios보내기5"
                onClick={res1} />

            <h1>계시판 불러오기</h1>
            <input type="button" value="리스트 불러오기" 
                onClick={boardList} />
                {리스트.map(item => (
                    <div key={item.boardIdx}>
                        <span>{item.title}</span>
                        <span>{item.userId}</span>
                        <span>{item.createAt}</span>
                    </div>
                ))}
        </div>
    )
}