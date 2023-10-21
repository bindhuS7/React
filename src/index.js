import React from 'react';
import {createRoot} from 'react-dom/client';
import { Store } from './Redux/Store/Store';
import { Provider } from 'react-redux';
import App from './App';
import NewContext from './Context/NewContext';

//for context API
// createRoot(document.getElementById('root')).render(
//  <NewContext >
//     <App />
//     </NewContext>

//for redux
createRoot(document.getElementById('root')).render(
    <Provider store={Store} >
       <App />
       </Provider>
    
);


