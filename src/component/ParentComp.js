
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'

class ParentComp extends Component {
constructor(props) {
  super(props)

  this.state = {
     name : 'Kietnehihi'
  }
}

componentDidMount(){
    setInterval(() => {
        this.setState({
            name: 'htk'
        })
    },2000)
}

  render() {
    return (
      <div>
        Parent Comp
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
      
    )
  }
}

export default ParentComp