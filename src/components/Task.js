import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSmile, faMeh, faFrown, faTimesCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons'

export default function Task(props) {
  function priorityLabel (param) {
    switch(param) {
      case '1':
          return 'Baixa';
      case '2':
          return 'Normal';
      case '3':
          return 'Alta';
      default :
          return 'Não definido';
    }
  }

  function priorityStatus (param, icon) {
    switch(param) {
      case '1':
          return icon ? faSmile : 'primary';
      case '2':
          return icon ? faMeh : 'black';
      case '3':
          return icon ? faFrown : 'danger';
      default :
          return icon ? faTimesCircle : 'secondary';
    }
  }

  return (
    <div className={"card mb-2 shadow-sm border-" + priorityStatus(props.task.priority)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className='badge bg-secondary me-1'>{props.task.id}</span>- {props.task.title}
          </h5>
          <h6>Prioridade:
            <span className={'ms-1 ext-black text-' + priorityStatus(props.task.priority)}>
              <FontAwesomeIcon className='me-1' icon={priorityStatus(props.task.priority, true)} />
              {priorityLabel(props.task.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.task.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => props.editTask(props.task.id)}>
            <FontAwesomeIcon className='me-1' icon={faEdit} /> Editar
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => props.deleteTask(props.task.id)}>
            <FontAwesomeIcon className='me-1' icon={faTrashCan} /> Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
