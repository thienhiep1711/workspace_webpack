import React, { Component } from 'react';

import Header from "./header.js";
import Footer from "./footer.js";


class Layout extends Component {
  
  constructor(){
    super();
    this.state = {
      title:"Xin chào",
    }
  }
  changeTitle(title){
     this.setState({title})
  }
  render() {
  
    return <div>

      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
     <Footer/>
    </div>;
  }
}

export default Layout;