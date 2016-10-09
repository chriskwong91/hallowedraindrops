import React from 'react';
import Navigation from './AdminNavigation.jsx';


const Admin = props => (
      <div>
        <Navigation />
        <div>{props.children}</div>
      </div>
);

export default Admin;
