import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // css 파일 import
import App from './App'; 

ReactDOM.render(
    <App />, // App 컴포넌트가 root 컴포넌트
  document.getElementById('root') // public.html의 <div id='root'></div>에 맵핑
);

