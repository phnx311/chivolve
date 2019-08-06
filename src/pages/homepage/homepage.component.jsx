import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const Homepage = (props) => (

  <div className='homepage'>
    {console.log(props)}
    <Directory />
    }
  </div>
)

export default Homepage;