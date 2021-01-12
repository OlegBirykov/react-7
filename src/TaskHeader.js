import PropTypes from 'prop-types';

function TaskHeader(props) {
  const { title } = props; 

  return (
    <div className="task-header">
      <h1 className="task-title">{title}</h1> 
    </div>
  );
}

TaskHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskHeader;
