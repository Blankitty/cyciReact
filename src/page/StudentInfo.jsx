import stu from '../data/Student.json';

/** 
 * 학생 정보 불러오기, json
*/


function StudentInfo() {

    console.log(stu);

    return (
        <>
            <h1>학생 정보</h1>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>이메일</th>
                        <th>지역</th>
                    </tr>
                </thead>
                <tbody>
                    {stu.student.map((stu, index) => {
                        return (
                            <tr key={index}>
                                <td>{stu.name}</td>
                                <td>{stu.age}</td>
                                <td>{stu.email}</td>
                                <td>{stu.region}</td>
                            </tr>
                        )
                    })}
                </tbody>
                    
            </table>
        </>
    )
}
export default StudentInfo;