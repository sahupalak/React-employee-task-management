import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const { employees } = useContext(AuthContext);

  return (
    <div id="alltask" className="p-7 bg-[#1C1C1C] mt-5 rounded-md">
      <div className="bg-sky-600 pl-72 mb-2 py-2  flex gap-10 rounded">
        <h2 className="text-xl font-md w-1/5 text-bold">New Task</h2>
        <h3 className="text-xl font-md w-1/5 text-bold ">Active Task</h3>
        <h5 className="text-xl font-md w-1/5 text-bold ">Completed</h5>
        <h5 className="text-xl font-md w-1/5 text-bold ">Failed</h5>
      </div>

      <div className="">
        {employees.map((employee, idx) => (
          <div
            key={idx}
            className="border-2 border-purple-500 mb-2 py-2 px-4 flex justify-between rounded hover:border-purple-400 transition-colors"
          >
            <h2 className="text-xl w-1/5">{employee.firstName}</h2>
            <h3 className="text-xl w-1/5 text-blue-400">
              {employee.taskCounts.newTask}
            </h3>
            <h5 className="text-xl w-1/5 text-green-400">
              {employee.taskCounts.active}
            </h5>
            <h5 className="text-xl w-1/5 text-yellow-400">
              {employee.taskCounts.completed}
            </h5>
            <h5 className="text-xl w-1/5 text-red-400">
              {employee.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
