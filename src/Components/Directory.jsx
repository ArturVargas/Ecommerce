
import React from 'react';
import MenuItem from './MenuItem';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
         departments: [
          { 
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
          },
          { 
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
          },
          { 
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5
          }
         ]   
        };
    }

    render() {
        return(
            <div>
                {
                    this.state.departments.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} img={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;