import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import sections from './directory.data.js';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div class='directory-menu'>
        {
          this.state.sections.map(({title, id, imageUrl, size}) => (
              <MenuItem title={title} key={id} image={imageUrl} size={size}/>
            ))
        }
      </div>
    );
  }
}

export default Directory;