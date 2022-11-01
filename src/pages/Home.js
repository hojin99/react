import React, {Component} from 'react';
import Table from '../component/table/Table' // 하위 컴포넌트

// react 컴포넌트는 React.Component를 상속 받아 class로 정의
class Home extends Component {
    state = { // state 객체를 통해서 데이터 상태 관리
      characters: [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },    
      ],
    }

    // 내부 함수
    removeCharacter = (index) => {
        const {characters} = this.state;

        // 상태를 변경하면 자동으로 다시 렌더링됨
        this.setState({
          characters : characters.filter((character, i) => {
            return i !== index;
          })
        });
    }

    render() { // render 함수를 통해서 JSX를 리턴하면 html로 렌더링됨
        const {characters} = this.state;

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );
    }
}

export default Home;