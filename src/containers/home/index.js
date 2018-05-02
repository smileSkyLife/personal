import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './index.css'
export default class Home extends Component {
  state = {
    hasOpen: false
  }
  componentDidMount(){
		//this.refs.left.style.transform = "rotateY(-180deg)"
		setTimeout( () => {
			this.refs.left.style.transform = "rotateY(-180deg)"
			this.refs.top.style.transform = "rotateX(180deg)"
			this.refs.right.style.transform = "rotateY(180deg)"
			this.refs.bottom.style.transform = "rotateX(-180deg)"
      this.refs.stage.style.overflow = "hidden"
			this.setState({
				hasOpen: true
			})
    }, 1000)
  }
  render() {
    return (
      <div>
        <div className="stage" ref="stage">
          <div className="content">
						<h1 style={!this.state.hasOpen?{display: 'none'}:{}}>哈哈哈哈 ...</h1>
          </div>
          <div className="top" ref="top">
          </div>
					<div className="right" ref="right">
					</div>
					<div className="bottom" ref="bottom">
					</div>
					<div className="left" ref="left">
					</div>
        </div>
      </div>
    )
  }
}