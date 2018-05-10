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
			header: "爽, ^ - ^",
			content: "愿你的快乐与岁月无关,\n" +
			"愿你的纯真与经历无关。\n" +
			"沧海桑田后依旧乘风破浪,\n" +
			"尘埃落定后依旧炙热欢畅。\n"+
			'好吧,说正经的,祝周爽同志25岁生日快乐！',
			footer: "Best Wishes!"
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