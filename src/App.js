import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

let initialState = [
  {
    "id": 1,
    "description": "Primeira Atividade"
  },
  {
    "id": 2,
    "description": "Segunda Atividade"
  },
]

function App() {
  const [tasks, setTasks] = useState(initialState);

  function addTask(event) {
    event.preventDefault();

    const task = {
      "id": document.getElementById('id').value,
      "description": document.getElementById('description').value
    }

    setTasks([...tasks, { ...task }]);
  }

  return (
    <>
      <form className='row g-3'>
        <div className="col-md-6">
          <label placeholder='id' className="form-label">ID</label>
          <input id='id' type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label placeholder='id' className="form-label">Descrição</label>
          <input id='description' type="text" className="form-control" />
        </div>
        <div className="col-12">
          <button className="btn btn-outline-success" onClick={addTask}>
            + Task
          </button>
        </div>
      </form>
      <div className="mt-3">
        {tasks.map(atv => (
        <div key={atv.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <p className="card-text">{atv.id} - {atv.description}</p>
            </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default App;
