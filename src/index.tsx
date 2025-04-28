import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2V1hhQlJDfVhdWnxLflF1VWtTfF96cVNWESFaRnZdQV1kSXlTd0dlXXlYcXdc');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>
);

