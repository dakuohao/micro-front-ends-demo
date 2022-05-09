import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apps from './apps'

//解决微应用是angualr式， zone.js 的问题
//必须import 'zone.js/dist/zone'
//安装命令：yarn add zone.js
import 'zone.js/dist/zone';

import {registerMicroApps, start} from "qiankun";


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//qiankun 微前端

registerMicroApps(apps);

start();