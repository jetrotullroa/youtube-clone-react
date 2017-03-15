import React from 'react'


class SearchBar extends React.Component {

  constructor({onInputChange}) {
    super({onInputChange});
    this.state = {
      search : '',
      onInputChange : onInputChange
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
    this.state.onInputChange(e.target.value)
  }

  render() {
    return(
      <div className="search-bar col-md-8">
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <p>Searching : {this.state.search}</p>
      </div>
    )
  }
}

export default SearchBar
