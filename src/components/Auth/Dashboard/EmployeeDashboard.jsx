import React from 'react';
import Header from '../../other/Header';
import TaskListNumber from '../../other/TaskListNumber';
import TaskList from '../../../TaskList/TaskList';

function EmployeeDashboard({ changeUser, data }) {
  return (
    <div className='p-10 h-screen w-screen'>
      <Header changeUser={changeUser} data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;


































// import React from 'react'
// import Header from '../../other/Header'
// import TaskListNumber from '../../other/TaskListNumber'
// import TaskList from '../../../TaskList/TaskList'

// function EmployeeDashboard({props}) {
//   // console.log(props)
//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
//     <Header  changeUser={props.changeUser} data={props.data} />
//     <TaskListNumber data={props.data} />
//     <TaskList data={props.data} />
//     </div>
//   )
// }

// export default EmployeeDashboard