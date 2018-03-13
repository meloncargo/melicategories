require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Box from './Box'
import Category from './Category';

class AppComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: [], country_id: "MLC", sites: [] }
    this.getSites()
  }

  componentDidMount() {
    this.getCategories(this.state.country_id)
  }

  change(event) {
    this.getCategories(event.target.value)
  }

  getCategories(country) {
    var self = this
    fetch('https://api.mercadolibre.com/sites/' + country + '/categories', { mode: 'cors' })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        self.setState({ categories: json })
      })
  }

  getSites() {
    var self = this
    fetch('https://api.mercadolibre.com/sites', { mode: 'cors' })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        self.setState({ sites: json })
      })
  }

  render() {
    var country_id = this.state.country_id
    return (
      <div className="index">
        <select id="country_id" onChange={this.change.bind(this)} value={this.state.value} style={{ marginBottom: 5, marginLeft: 20 }} defaultValue={country_id}>
          {this.state.sites.map(function (site, index) {
            return <option value={site["id"]} key={index}>{site["name"]}</option>
          })
          }
        </select>
        <Box category={{ name: 'Root', id: '0' }} categories={this.state.categories} />
      </div>
    );
  }
}

export default AppComponent;
