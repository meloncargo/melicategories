require('styles/App.css');

import React from 'react';
import Category from './Category';

export default class Box extends React.Component{

  constructor(props){
    super(props);
    this.state = {categories: []}
  }



  handleCategoryClick(id){
    var self = this
    fetch(`https://api.mercadolibre.com/categories/${id}`, {mode: 'cors'})
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        console.log(json)
        self.setState({categories: json.children_categories})
      })
  }

  render(){
    var self = this
    var categories = this.props.categories.map(function(c){
      return(<Category key={c.id} categorie={c} handleClick={self.handleCategoryClick.bind(self)} />)
    })

    var box;
    if(this.state.categories.length > 0){
      box = <Box categories={self.state.categories} />
    }

    return(
      <div className="boss-box">
        <div className="category-box">
          {categories}
        </div>
        {box}
      </div>
    )
  }
}
