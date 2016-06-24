import React from 'react';

export default class Category extends React.Component{

  render(){
    var {id, name} = this.props.categorie
    return(
        <li>
          <a onClick={this.props.handleClick.bind(this, id)}>{name}</a>
        </li>
    )
  }
}
