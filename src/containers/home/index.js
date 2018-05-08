import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './index.css'
export default class Home extends Component {
  state = {
    showName: false
  }
  componentDidMount(){
		Promise.resolve().then((resolve, reject) => {
			var customBeziers = anime({
				targets: '#customBezier .hi',
				translateX: window.innerWidth/2+100-10,
				easing: [.91,-0.54,.29,1.56]
			});
      customBeziers.complete = () => {
        this.setState({
          showName: true
        })
				var allCallbacks1 = anime({
					targets: '#allCallbacks .first',
					translateX: 200,
					delay: function(el, i) { return 1000 + (i * 100); },
					duration: function(el, i) { return 500 + (i * 500); }
				});
				var allCallbacks2 = anime({
					targets: '#allCallbacks .second',
					translateX: -180,
					delay: function(el, i) { return 1000 + (i * 100); },
					duration: function(el, i) { return 500 + (i * 500); }
				});
      }
    })
  }
  render() {
    return (
				<div id="customBezier">
					<p className="hi">
						Hi
					</p>
					<p className="content" style={this.state.showName?{opacity: 1}:{}}>
						Zora
					</p>
					<div className="happy" id="allCallbacks" style={{color: "#ffffff"}}>
            <p className="first">Happy</p>
						<p className="second">BirthDay!</p>
          </div>
				</div>
    )
  }
}