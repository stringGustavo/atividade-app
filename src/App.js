import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

let initialState = [
  {
    id: 1,
    title: "Título 1",
    priority: "1",
    description: "Primeira Atividade"
  },
  {
    id: 2,
    title: "Título 2",
    priority: "2",
    description: "Segunda Atividade"
  },
  {
    id: 3,
    title: "Título 3",
    priority: "3",
    description: "Terceira Atividade"
  }
]

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [task, setTask] = useState({});

  function addTask(event) {
    event.preventDefault();

    const task = {
      id: refreshIndex(),
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value,
      description: document.getElementById('description').value
    }

    setTasks([...tasks, { ...task }]);
  }

  function deleteTask (id) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks([...filteredTasks]);
  }

  function editTask (id) {
    const task = tasks.filter(task => task.id === id);
    setTask(task[0]);
  }

  function refreshIndex () {
    return Math.max.apply(Math, tasks.map(item => item.id)) + 1;
  }

  return (
    <>
      <TaskForm
        refreshIndex={refreshIndex}
        selectedTask={task}
        addTask={addTask}
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
