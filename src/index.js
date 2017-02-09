import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Link extends React.Component{
  render() {
    var url='/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return (
      <li>
        <a className="list" href={url}>
      {this.props.label}
      </a>
      </li>
      
    )
  }
}



class Menu extends React.Component{
  render(){
    let menus = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact-us.'];
    return (
      <div className="header">
        
        <h1 className="text-right"> LEVEL ONE PROJECT </h1>
        <ul >
        {menus.map(function(v,i){
          return(
          //  <ulclassName="box" key={i}>
             <Link label={v}>
             </Link>
            // </div>
           )
        })}
        </ul>
      </div>
    )
}
}


     
      
  ReactDOM.render(
        <Menu/>,
        document.getElementById("root")
      );

