import React ,{Component} from "react"
import {Link} from "react-router"

var Pak = React.createClass({
    render:function(){
        return (
            <div> 
                Pak Page
                <ul>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                    <li><Link to = "/task">Go to Task</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

module.exports = Pak;