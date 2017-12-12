import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>Error 404: {location.pathname} Not Found</h3>
  </div>
)

export default NoMatch