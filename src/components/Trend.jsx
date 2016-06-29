require('styles/App.css');

import React from 'react';
import swal from 'sweetalert2';

export default class Trend extends React.Component{

  getTrends() {

    fetch(`https://api.mercadolibre.com/sites/MLC/trends/search?category=${this.props.id}`, {mode: 'cors'})
      .then(function(response){
        return response.json()
      })
      .then(function(response){
        /*console.log(response.map((x) => x.keyword))*/
        var trends = response.map((x) => x.keyword).join(' \n')
        console.log(trends)
        swal({
          title: "Frases más buscadas: ",
          text: trends
         });
      })
  }

  render() {
    return(
      <span onClick={this.getTrends.bind(this)}> 🔍</span>
    )
  }
}
