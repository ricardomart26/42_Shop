import React from 'react';
import ProductList from './ProductList';

class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {};
  }
  render() {
    const h1Style = {fontSize : '30px', display: 'flex', alignItems : 'center', justifyElements : 'center'}
    return (
      <div>
        <h1 style={h1Style}> 42 SHOP</h1>
        <ProductList/>
      </div>
    );
  }
}

export default App;
