import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  const { employees, setEmployees } = useContext(AuthContext);

  const updateTaskStatus = (taskIndex, newStatus) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.email === data.email) {
        const updatedTasks = [...emp.tasks];

        // Update task status
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          newTask: false,
          active: false,
          completed: false,
          failed: false,
          [newStatus]: true,
        };

        // Recalculate counts
        const taskCounts = {
          newTask: updatedTasks.filter((t) => t.newTask).length,
          active: updatedTasks.filter((t) => t.active).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        };

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts,
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Update local storage for logged in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const updatedEmployee = updatedEmployees.find(
      (emp) => emp.email === data.email
    );
    if (loggedInUser && loggedInUser.role === "employee") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...loggedInUser,
          data: updatedEmployee,
        })
      );
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-5">Your Tasks</h2>
      <div className="grid gap-4">
        {data?.tasks.map((task, idx) => (
          <div key={idx} className="bg-[#1C1C1C] p-5 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">{task.taskTitle}</h3>
                <p className="text-gray-400 mt-2">{task.taskDescription}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Due: {task.taskDate}
                </p>
                <p className="text-sm text-gray-500">
                  Category: {task.category}
                </p>
              </div>
              <div className="flex gap-2">
                {task.newTask && (
                  <button
                    onClick={() => updateTaskStatus(idx, "active")}
                    className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Accept
                  </button>
                )}
                {task.active && (
                  <button
                    onClick={() => updateTaskStatus(idx, "completed")}
                    className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                  >
                    Complete
                  </button>
                )}
                {!task.completed && !task.failed && (
                  <button
                    onClick={() => updateTaskStatus(idx, "failed")}
                    className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
                  >
                    Mark Failed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
