// Import the useState hook from React
import { useState } from "react"

// Define the ToDoList functional component
function ToDoList() {
  // Declare state variable `tasks` and its updater function `setTasks` with an initial array of tasks
  const [tasks, setTasks] = useState(["read", "reat", "feach water"])

  // Declare state for the new task input field
  const [newTask, setNewTask] = useState("")

  // Handle changes to the input field and update `newTask`
  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  // Add a new task to the list
  function addTask() {
    if (newTask.trim() !== "") {
      // Check if input is not empty after trimming
      setTasks((t) => [...t, newTask]) // Add new task to the end of tasks array
      setNewTask("") // Clear the input field
    }
  }

  // Delete a task based on its index
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index) // Filter out the task at the given index
    setTasks(updatedTasks) // Update the task list
  }

  // Move a task up by swapping it with the one above
  function moveTaskUp(index) {
    if (index > 0) {
      // Make sure it’s not the first item
      const updatedTasks = [...tasks] // Create a shallow copy of the tasks
      // Swap current task with the one above
      ;[updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks) // Update the tasks state
    }
  }

  // Move a task down by swapping it with the one below
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      // Make sure it’s not the last item
      const updatedTasks = [...tasks] // Create a shallow copy
      // Swap current task with the one below
      ;[updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks) // Update the tasks state
    }
  }

  // JSX that defines what the component renders
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      {/* Input section for adding a task */}
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask} // Controlled input bound to newTask state
          onChange={handleInputChange} // Handle input changes
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Ordered list of tasks */}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Display the task text */}
            <span className="text">{task}</span>

            {/* Button to delete this task */}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            {/* Button to move this task up */}
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>

            {/* Button to move this task down */}
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

// Export the ToDoList component so it can be used in other files
export default ToDoList
