import React from 'react'


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search : ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return(
      <div>
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
