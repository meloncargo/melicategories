import React from 'react';
import Trend from './Trend';

export default class Category extends React.Component{

  render(){
    var {id, name} = this.props.categorie
    return(
        <li>
          <a className="cursor-pointer" onClick={this.props.handleClick.bind(this, id)}>{name}</a>
          <Trend {...this.props.categorie} />
        </li>
    )
  }
}
