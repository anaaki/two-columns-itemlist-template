import React, {Component} from 'react';

import ListItem from './listItem.js';

class LeftItemComponent extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    const targetItems = this.props.items.filter((item)=>{
      return item.position === 'left'
    });
    return <ListItem items={targetItems} switchPosition={this.props.switchPosition} />
  }

}

export default LeftItemComponent;
