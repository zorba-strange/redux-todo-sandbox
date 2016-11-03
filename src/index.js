const React                 = require('react');
const { render }            = require('react-dom');
const { Provider }          = require('react-redux');
const { createStore }       = require('redux');
const todoApp               = require('./reducers/reducers').default;
const App                   = require('./App').default;


const store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

