import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


class ToolTip extends React.Component {
toggle() {
const tooltipNode = ReactDOM.findDOMNode(this)
this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
}

  constructor(props) {
   super(props)
   this.toggle = this.toggle.bind(this)
    this.state = {opacity: false}
  }

  render() {
const style = {
zIndex: (this.state.opacity) ? 1000 : -1000,
opacity: +this.state.opacity,
top: (this.state.top||0) + 20,
left: (this.state.left||0) -30}

return (
<div style={{display: 'inline'}}>
<span style={{color: 'blue'}}
onMouseEnter={this.toggle} 
onMouseOut={this.toggle}>
{this.props.children} 
</span>
<div className="tooltip bottom"
style={style} 
role="tooltip">
<div className="tooltip-arrow"></div>
<div className="tooltip-inner">
{this.props.text} 
</div>
</div>
</div>
)
}

}

ReactDOM.render(
  <div>
  
  <ToolTip  
  text = 'Master Express.js-The Node.js Framework For Your Web Development' >
    
   
    Pro Express.js'
  </ToolTip>,

  <ToolTip text='Practical Node.js: Building Real-World Scalable Web Apps'>
    
    Practical Node.js
  </ToolTip>,
  
  <ToolTip  text='HTTP API server'>
    'Hapi'
  </ToolTip>,
  <ToolTip  text='Release the Kraken!'>
    'Kraken'
  </ToolTip>,
  <ToolTip  text='Sail away'>
    'Kraken'
  </ToolTip>,
   <ToolTip  text='IBM of frameworks'>
    'Loopback'
  </ToolTip>,
  


</div>, document.getElementById('root'));


