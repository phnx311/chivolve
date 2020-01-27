import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directorySectionsSelector } from '../../redux/directory/directory.selector';

import './directory.styles.scss';



  const Directory = ({directory}) => (
      <div className='directory-menu'>
        {
          directory.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps} />
            ))
        }
      </div>
    );


const mapStateToProps = createStructuredSelector({
  directory: directorySectionsSelector
})



export default connect(mapStateToProps, null)(Directory);