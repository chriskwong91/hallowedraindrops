import React from 'react';
import {Link} from 'react-router'


//Other Components
import Navigation from '../Admin/AdminNavigation.jsx';


class ChallengeTechnical extends React.Component {

  render() {
    return (
    <div className='container'>
      <Navigation> </Navigation>
      <div className='row jumbotron challenge-info'>
        <h1 className="blog-selection-header">Sucessfully Created Challenge.</h1>
        <Link to="/" className="challenge-start">
        <h4 className="blog-selection-header">Click here to go home.</h4></Link>
      </div>
    </div>
    )
  }
}


export default ChallengeTechnical;
