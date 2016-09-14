import React, {Component} from 'react'
import Header from './components/Header'
import Requests from './components/Requests'
import Login from './components/Login'
import Forgot_Password from './components/Forgot_Password'
import New_Request from './components/New_Request/New_Request'

export default class App extends Component {
    render(){
        return (
            <div className="app">
                <New_Request/>
            </div>
        )
    }
}
