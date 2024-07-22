import React from 'react';
import useInput from '../../hooks/useInput';

function PostPage(props) {
    const schoolNameInput = useInput();
    const departmentInput = useInput();
    const gradeInput = useInput();
    const nameInput = useInput();

    const handleSubmit = () => {
        const student = {
            schoolName: schoolNameInput.value,
            department: departmentInput.value,
            grade: gradeInput.value,
            name: nameInput.value
        }

        console.log(student);
    }

    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST)</h1>
            </header>
            <main>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text"
                        onChange={schoolNameInput.onChange}
                        value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">학과명: </label>
                    <input type="text"
                        onChange={departmentInput.onChange}
                        value={departmentInput.value} />
                </p>
                <p>
                    <label htmlFor="">학년: </label>
                    <input type="text"
                        onChange={gradeInput.onChange}
                        value={gradeInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text"
                        onChange={nameInput.onChange}
                        value={nameInput.value} />
                </p>
                <p>
                    <button onClick={handleSubmit}>전송</button>
                </p>
            </main>
        </>
    );
}

export default PostPage;