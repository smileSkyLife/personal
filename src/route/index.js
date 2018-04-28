import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import asyncComponent from '../util/AsyncComponent'

const Home = asyncComponent(() => import('../containers/home/index.js'))
const Company = asyncComponent(() => import('../containers/company/index'))

class Routers extends Component{
  render(){
    return (<div>
        <Router basename='/' >
          <div>
            <Switch>
              <Redirect exact={true} from='/' to='/home' />
            </Switch>
            <Route path='/home' component={Home}/>
            <Route path='/company' component={Company}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default Routers


