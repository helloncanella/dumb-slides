import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="panel">
        <div className="sections ">
           <div className="left">
              <ul className="menu">
                <li><h4>Refascent</h4></li>
                <li><p> <i className="fa fa-home"></i> home</p></li>
              </ul>
           </div>
           <div className="right">
              <ul className="menu">
                <li><p> <i className="fa fa-cog"></i> user</p></li>
              </ul>
           </div>
        </div>
      </nav>
    )
  }
}
