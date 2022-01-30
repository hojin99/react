import React, {Component} from 'react';

// 함수 형태로 간단하게 컴포넌트를 정의할 수 있음
const TableHeader = () => {
    return (
    <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
     </thead>     
    )
}

// 함수의 매개변수로 props를 넘길 수 있음
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
      </tr>       
      )
    });

    // class의 render()함수와 같이 JSX를 html로 렌더링해 줌
    return (
        <tbody>
          {rows}
      </tbody>       
    )
}

class Table extends Component {
    render() {
        // class의 경우 this.props로 프로퍼티를 받을 수 있음
        const {characterData, removeCharacter} = this.props;

         return (
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>    
        )
    }
}

export default Table;