require('styles/App.css');

import React from 'react';
import Category from './Category';

export default class Box extends React.Component{

  constructor(props){
    super(props);
    this.state = {categories: [], category: {}}
  }



  handleCategoryClick(id){
    var self = this
    fetch(`https://api.mercadolibre.com/categories/${id}`, {mode: 'cors'})
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        if (json.settings.listing_allowed){
          prompt(json.name, json.id)
        }
        self.setState({categories: json.children_categories, category: {id: json.id, name: json.name}})
      })
  }

  render(){
    var self = this
    var categories = this.props.categories.map(function(c){
      return(<Category key={c.id} categorie={c} handleClick={self.handleCategoryClick.bind(self)} />)
    })

    var box;
    if(this.state.categories.length > 0){
      box = <Box key={self.state.category.id} category={self.state.category} categories={self.state.categories} />
    }

    return(
      <div className="boss-box">
        <div className="category-box">
          <h3>{this.props.category.name} 👈</h3>
          {categories}
        </div>
        {box}
      </div>
    )
  }
}
