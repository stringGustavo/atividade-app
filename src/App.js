import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({id: 0});
  
  useEffect( () => {
    (tasks.length <= 0) ? setIndex(1) : setIndex(refreshIndex());
  }, [tasks]);

  function addTask (task) {
    setTasks([...tasks, {...task, id: index}])
  }
  
  function cancelEdit () {
    setTask({id: 0});
  }

  function deleteTask (id) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks([...filteredTasks]);
  }

  function editTask (id) {
    const task = tasks.filter(task => task.id === id);
    setTask(task[0]);
  }


  function updateTask (task) {
    setTasks(tasks.map(item => (item.id === task.id) ? task : item));
    setTask({id: 0});
  }

  function refreshIndex () {
    return Math.max.apply(Math, tasks.map(item => item.id)) + 1;
  }

  return (
    <>
      <TaskForm
        refreshIndex={refreshIndex}
        selectedTask={task}
        cancelEdit={cancelEdit}
        addTask={addTask}
        updateTask={updateTask}
        tasks={tasks}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </>
  );
}

export default App;
