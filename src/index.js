import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


let myComponent = document.getElementById('reactify-django-ui')
if (myComponent !== null) {
    ReactDOM.render(<App />, myComponent);
}




// how react renders out app that we have created...which is a componentrendering out another component
// registerServiceWorker();
