require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Box from './Box'
import Category from './Category';

class AppComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {categories: [], country_id: ""}
  }

  componentDidMount(){
    if(this.state.country_id == ""){
      this.getCategories("MLC")
    } else{
      this.getCategories(this.state.country_id)
    }
  }

  change(event){
    this.getCategories(event.target.value)
  }

  getCategories(country){
    var self = this
    fetch('https://api.mercadolibre.com/sites/' + country +'/categories', {mode: 'cors'})
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
        <select id="country_id" onChange={this.change.bind(this)} value={this.state.value} style={{marginBottom: 5, marginLeft: 20 }}>
          <option value="MLC">MLC</option>
          <option value="MCO">MCO</option>
        </select>
        <Box category={{name: 'Root', id: '0'}} categories={this.state.categories} />
      </div>
    );
  }
}

export default AppComponent;
