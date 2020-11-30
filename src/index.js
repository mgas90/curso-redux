import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//para crear store importamos:
//para poder trabajar con el middleware 
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
//1)importamos el middleware para las llamadas asincronas
import reduxThunk from 'redux-thunk';
//importamos los reducer ya creados
import reducers from './reducers';


//creamos nuestro almacenamiento 
const store = createStore(
  /*todos los reducers*/
  reducers,
  {},//estado inicial 
  /*2)se le aplica al almacenamiento como un middleware*/ 
  applyMiddleware(reduxThunk)
);
ReactDOM.render(
  <React.StrictMode>
{/*   le enviamos nuestros reducer a la app, colocamos los provedores y el almacenamiento  por store 
 */}    
  <Provider store= { store }>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

