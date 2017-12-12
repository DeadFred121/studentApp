import React, { Component } from 'react';
import Students from '../database';

class ListStudents extends Component {
  render() {
    return (
      <div>
        {Students.map((student) => {
          return (
            <div>
              <p>{student.name}</p>
              <img src={student.avatar} alt='avatar' />
            </div>
          )
        })}
      </div>
    )
  }
}
  
export default ListStudents;
