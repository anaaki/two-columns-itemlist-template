import React, { Component } from "react";
import LeftItemComponent from "./components/leftListItemComponent";
import RightItemComponent from "./components/rightListItemComponent";
import SearchBar from "./components/searchBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title: "left item1",  position: "left", key: 1, visible: true},
        {title: "left item2",  position: "left", key: 2, visible: true},
        {title: "right item1",  position: "right", key: 3, visible: true},
        {title: "right item2",  position: "right", key: 4, visible: true}
      ]
    };
  }
  seachItem(keyWord) {
    // seach in left item by keyWord
    const newItemList = this.state.items.map((item)=>{
      if (item.title.includes(keyWord)){
        item.visible = true
      } else {
        item.visible = false
      }
      return item;
    });
    this.setState({items: newItemList});
  }
  switchPosition(targetItem){
    // swith left to right
    const newitemList = this.state.items.map((item)=>{
      if (item.key===targetItem.key){
        item.position = item.position==="right" ? "left": "right"
      }
      return item
    });
    this.setState({items: newitemList});
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <AppTitle />
          <div className="row">
            <div className="col-sm-6">
            <SearchBar searchItem={this.seachItem.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <LeftItemComponent items={this.state.items} switchPosition={this.switchPosition.bind(this)} />
            </div>
            <div className="col-sm">
              <RightItemComponent items={this.state.items} switchPosition={this.switchPosition.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AppTitle = () => {
  return <h1>Two Columns Itemlist Template</h1>;
};
export default App;
