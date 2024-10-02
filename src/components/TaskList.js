import Task from "./Task";

export default function TaskList(props) {
  return (
    <div className="mt-3">
        {props.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
          />
        ))}
      </div>
  )
}
