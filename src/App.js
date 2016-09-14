import React, {Component} from 'react'
import Header from './components/Header'
import Requests from './components/Requests'
import Login from './components/Login'

export default class App extends Component {
    render(){
        return (
            <div className="app">
                <Header/>
                <Login/>
            </div>
        )
    }
}
