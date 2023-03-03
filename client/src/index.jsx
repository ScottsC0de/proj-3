// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';

class Main extends Component {
    render() {
        return (
           <div className="main">
               <h1>Scotchage</h1>
           </div>
        );
    }
}

render(<Main />, document.getElementById('container'));
