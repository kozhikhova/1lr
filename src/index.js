import React from "react";
import ReactDOM from "react-dom";

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
