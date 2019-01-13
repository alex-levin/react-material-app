import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuIcon />
        <Button variant="contained" color="primary">
          Hello World
    </Button>
      </div>
    );
  }
}

export default App;
