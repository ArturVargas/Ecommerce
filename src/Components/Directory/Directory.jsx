
import React from 'react';
import MenuItem from '../Menu/MenuItem';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
         departments: [
          { 
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'hats'
          },
          { 
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'Jackets'
          },
          { 
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'mens'
          }
         ]   
        };
    }

    render() {
        return(
            <div className="">
                {
                    this.state.departments.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} img={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;