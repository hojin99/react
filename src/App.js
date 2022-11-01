import React, {Component} from 'react'
import Home from './pages/Home';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';
import About from './pages/About';
import {Routes, Route, Link} from "react-router-dom";

// react 컴포넌트는 React.Component를 상속 받아 class로 정의
class App extends Component {

    render() { // render 함수를 통해서 JSX를 리턴하면 html로 렌더링됨
        return (
          <div class="app">
            <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="/counter">Counter</Link> |{" "}
              <Link to="/input">Input</Link> |{" "}
              <Link to="/input2">Input2</Link> |{" "}
              <Link to="/list">List</Link> |{" "}
              <Link to="/about">About</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/counter" element={<Counter />}></Route>
              <Route path="/input" element={<Input />}></Route>
              <Route path="/input2" element={<Input2 />}></Route>
              <Route path="/list" element={<List />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        );
    }
}

export default App;