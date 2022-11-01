import React, {useState} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const change = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setInputs({
            ...inputs, [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={inputs.name} onChange={change}></input> 
            </div>
            <div>
                <label>이메일</label>
                <input type="text" id="email" value={inputs.email} onChange={change}></input> 
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" id="tel" value={inputs.tel} onChange={change}></input> 
            </div>
            <p>이름: {inputs.name} </p>
            <p>이메일: {inputs.email} </p>
            <p>전화번호: {inputs.tel} </p>
        </div>
    );
}

export default Input2;