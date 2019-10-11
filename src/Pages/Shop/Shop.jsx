
import React from 'react';
import ShopData from '../../assets/Collection/shop.data';
import PreviewCollection from '../../Components/PreviewColection/PreviewColection';

class Shop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: ShopData
    };
    console.log(this.state)
  }

  render() {
    const {collections} = this.state;
    return (
    <div className="container">
      {
        collections.map(({id, ...collectionProps}) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))
      }
    </div>
    )
  }
}

export default Shop;