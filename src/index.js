
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import Product from './product';
import Cart from './cart';
import Checkout from './checkout';
import './index.css';

import { Router, Route, hashHistory,IndexRoute, Link } from 'react-router';
var PRODUCTS = [
  { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly',
   url:
" https://www.google.com.pk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fwebapplog.com%2Fmeeting-react-js-an-excerpt-from-react-quickly%2F&psig=AFQjCNGF_9MFk4NHfAfJbJQojWZr6T0w8w&ust=1487000970529568"},
  { id: 4, src: 'images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
];

const Heading = () => {
  return (<div className="jumbotron" style={{backgroundColor:"lightgreen"}}><h1 style={{textAlign:"center",color:"blue", textDecoration:"underline"}}>Nile Book Store</h1></div>)
};

const Copy = () => {
  return <p style={{color:"blue",fontSize:"25px",textAlign:"center", border:"5px solid blue"}}><em>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.</em></p>
};

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    //console.log('Modal: ', this.isModal)
    return (
      <div className="well">
        <Heading/>
        <div>
          {(this.isModal)?this.previousChildren:this.props.children}
         
          {(this.isModal)?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={{pathname: `/products/${picture.id}`,
                state: { modal: true,
                  returnTo: this.props.location.pathname }
                }
              }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

var cartItems = {}
var addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
      cartItems={cartItems} products={PRODUCTS}/>
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS}/>
  </Router>
), document.getElementById('root'))




 