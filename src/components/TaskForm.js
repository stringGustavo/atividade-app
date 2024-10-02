import { useEffect, useState } from "react";

const initialTask = {
  id: 0,
  title: '',
  priority: 0,
  description: ''
};

export default function TaskForm(props) {
  const [task, setTask] = useState(actualTask());

  useEffect( () => {
    (props.selectedTask.id !== 0) && setTask(props.selectedTask);
  }, [props.selectedTask]);

  const inputTextHandler = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  function actualTask () {
    return (props.selectedTask.id !== 0) ? props.selectedTask : initialTask;
  }

  return (
    <form className='row g-3'>
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
      </div>
      <div className="col-12">
        <button className="btn btn-outline-success" onClick={props.addTask}>
          + Task
        </button>
      </div>
    </form>
  )
}
