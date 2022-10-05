import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const percentage = 66;
const DATA = [
    { id: "todo-0", name: "CS Captsone Project", completed: true },
    { id: "todo-1", name: "Cry", completed: false },
    { id: "todo-2", name: "Froot Loops", completed: false },
    { id: "todo-3", name: "Gravy", completed: false }
];

ReactDOM.render(
    <React.StrictMode>
        <App tasks={DATA} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
