import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faCheckSquare, faTimesRectangle } from '@fortawesome/free-regular-svg-icons'

const initialTask = {
  id: 0,
  title: '',
  priority: 0,
  description: ''
};

export default function TaskForm(props) {
  const [task, setTask] = useState(actualTask());

  useEffect(() => {
    (props.selectedTask.id !== 0) && setTask(props.selectedTask);
  }, [props.selectedTask]);

  const inputTextHandler = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    (props.selectedTask.id !== 0) ? props.updateTask(task) : props.addTask(task);

    setTask(initialTask);
  }

  const handleCancel = (event) => {
    event.preventDefault();

    props.cancelEdit();

    setTask(initialTask);
  }

  function actualTask() {
    return (props.selectedTask.id !== 0) ? props.selectedTask : initialTask;
  }

  return (
    <>
      <h1>Atividade {task.id !== 0 ? task.id : ''}</h1>
      <form className='row g-3' onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label placeholder='id' className="form-label">Título</label>
          <input id='title'
            name='title'
            onChange={inputTextHandler}
            value={task.title}
            type="text"
            className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="priority"
            name="priority"
            value={task.priority}
            onChange={inputTextHandler}
            className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label placeholder='id' className="form-label">Descrição</label>
          <textarea id='description'
            name='description'
            onChange={inputTextHandler}
            value={task.description}
            type="text"
            className="form-control" />
            <hr />
        </div>
        <div className="col-12 mt-0">
          {
            (task.id === 0) ?
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faPlusSquare} /> Adicionar Tarefa
              </button>
              
              :

              <div>
                <button className="btn btn-outline-success ms-2" type="submit" >
                  <FontAwesomeIcon icon={faCheckSquare} /> Confirmar Edição
                </button>
                <button className="btn btn-outline-secondary ms-2" onClick={handleCancel}>
                  <FontAwesomeIcon icon={faTimesRectangle} /> Cancelar Edição
                </button>
              </div>
          }
        </div>
      </form>
    </>
  )
}
