require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Box from './Box'
import Category from './Category';

class AppComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {categories: []}
  }

  componentDidMount(){
    this.getCategories()
  }

  getCategories(){
    var self = this
    fetch('https://api.mercadolibre.com/sites/MLC/categories', {mode: 'cors'})
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        self.setState({categories: json})
      })
  }

  render() {
    return (
      <div className="index">
        <Box category={{name: 'Root', id: '0'}} categories={this.state.categories} />
      </div>
    );
  }
}

export default AppComponent;
