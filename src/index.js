import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import watchers from './store/sagas';
import reducers from './store/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const saga = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(saga)),
);

saga.run(watchers);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
