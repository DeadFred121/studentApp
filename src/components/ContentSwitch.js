import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import NoMatch from './NoMatch';
import ListStudents from './ListStudents';

const ContentSwitch = () => (
  <Switch>
    <Route exact path="/" component={ListStudents} />
    <Route path="/students/:id" component={Student} />
    {/*<Route path="/students/new" component={NewStudent} />
    <Route path="/students/:id/edit" component={EditStudent} />*/}
    <Route component={NoMatch} /> 
  </Switch>
)

export default ContentSwitch;