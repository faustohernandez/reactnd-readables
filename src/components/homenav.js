import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HomeNav extends Component {
    render(){
        return(
            <div>
            <nav className="navbar navbar-default hero-nav">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand" >Readables</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create Post</Link></li>
                    </ul>
                </div>
                </nav>
            </div>
      
        )
    }
}

export default HomeNav;