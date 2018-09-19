import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

class Image extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.clickImage = this.clickImage.bind(this)
  }

  clickImage(){
    this.props.clickHandler(this.props.name)
  }
  render() {
    return (
      <Panel style={{textAlign: "center", float: "left", width: "25%"}}>
        <img 
        onClick={this.clickImage}
        style={{width: "70px", height: "120px"}} 
        src={require(`../assets/images/${this.props.name}.jpg`)} />
      </Panel>
    );
  }
}

export default Image;