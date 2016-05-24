import React from 'react';

class Product extends React.Component {
  constructor(props) {
      super(props);

      this.displayName = 'Product';
      this.state={liked: false, activeColorID:0};
  }

  handleClick(e) {
    
    //store.dispatch(addCart({id:this.props.id,price:this.props.price, text:this.props.children}));
    //this.props.addTotal( liked? this.props.price : -this.props.price );
  }
  selectColor(e, index){
    this.setState({activeColorID:index});
  }
  handleLike(e){
    var liked = !this.state.liked;      
    this.setState({liked: liked});
  }
  render() {

      return (<div className="product">
                <div className="product__info">
                  <div className="img">                    
                    <img src={'dist/products/product'+this.props.id+'/'+this.props.images[this.state.activeColorID]}/>
                  </div>
                  
                  <ul className="product__colors">
                  {this.props.images.map((image,index)=>{
                    return <li key={index} className={this.state.activeColorID==index?'active':''} onClick={(e)=>this.selectColor(e,index)}><img src={'dist/products/product'+this.props.id+'/'+image}/></li>
                  })}
                  </ul>
                    <a className="action-a" onClick={e=>this.props.onClick(e, this.props.id)}>
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      
                    </a>
                </div>
                <div className="product__meta">
                <h3 className="product__title">{this.props.text}</h3>      
                <span className="product__price">${this.props.price.toFixed(2)}</span>
                </div>
                <i className={"fa fa-heart like "+ (this.state.liked?'active':'')} onClick={e=>this.handleLike(e)}/>
              </div>              
      );
  }
}


export default Product;


