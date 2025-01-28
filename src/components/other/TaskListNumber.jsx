import React from "react";

function TaskListNumber({ data }) {
  const { taskCounts } = data || {
    taskCounts: { newTask: 0, completed: 0, active: 0, failed: 0 },
  };

  return (
    <div className="flex mt-10 justify-between gap-5 w-full">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-pink-500 hover:bg-pink-600 transition-colors">
        <h2 className="text-3xl font-semibold">{taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-purple-500 hover:bg-purple-600 transition-colors">
        <h2 className="text-3xl font-semibold">{taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold ">Completed Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-500 hover:bg-yellow-600 transition-colors">
        <h2 className="text-3xl font-semibold">{taskCounts.active}</h2>
        <h3 className="text-xl font-semibold">Accepted Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-500 hover:bg-green-600 transition-colors">
        <h2 className="text-3xl font-semibold">{taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold ">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
