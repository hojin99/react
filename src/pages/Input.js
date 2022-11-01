import React, {useState} from 'react';

const Input = () => {
    const [txtValue, setTxtValue] = useState("");

    const change = (e) => {
        setTxtValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={change}></input> 
            <br></br>
            <p>{txtValue}</p>
        </div>
    );
}

export default Input;