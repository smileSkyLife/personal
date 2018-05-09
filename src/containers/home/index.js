import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './index.css'
export default class Home extends Component {
  state = {
		header: "",
		content: "",
		footer: "",
		num: 0,
		text: {
			header: "Hi, xxxx",
			content: "深入学习一个框架最直接的方式，就是弄明白框架的原理。React无疑是一个非常值得学习其原理的框架，它设计简单，没有引入任何新的概念，一个组件就是一个方法或一个类。",
			footer: "Best Regards!"
		}
	}
  componentDidMount(){
		this.state.text.header && this.insertText()
		setTimeout( ()=>{
			console.log(this)
		},2000)
	}
	insertText() {
  	var inner = ""
		var keys = Object.keys(this.state.text)
		var num = this.state.num || 0
		var text = this.state.text[keys[num]]
		for(let i = 0; i<text.length; i++){
			setTimeout( () => {
				inner = inner + text[i]
				if(num === 1){
					this.setState({
						content: inner
					})
				}
				if(num === 0){
					this.setState({
						header: inner
					})
				}
				if(num === 2){
					this.setState({
						footer: inner
					})
				}
				if(i === text.length-1){
					this.setState({
						num: ++num
					})
				  keys[num]&&this.insertText(num)
				}
			}, 280*i)
		}
	}
  render() {
    return (
				<div className="home">
          <p className={this.state.num===0?'header inserting':'header'}>{this.state.header}</p>
					<div className="content">
						<p>{this.state.content}{this.state.num===1?<span className='inserting'></span>:''}</p>
					</div>
					<p className={this.state.num===2?'footer inserting':'footer'}>{this.state.footer}</p>
				</div>
    )
  }
}