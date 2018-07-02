import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';


const StoreInstance = Store();

StoreInstance.subscribe(() => 
localStorage.setItem("todoList", JSON.stringify(StoreInstance.getState())))
ReactDOM.render(<Provider store={StoreInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
