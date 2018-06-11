import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef();
  }
  search(e) {
    this.props.searchItem(e.target.value)
    console.log(e.target.value)
  }
  render(){
    return (
      <div className="form-group">
        <input type="text" className="form-control" ref={this.textInput} onChange={(e)=>{this.search(e)}} />
      </div>
    )
  }
}

export default SearchBar;