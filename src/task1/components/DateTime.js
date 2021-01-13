import PropTypes from 'prop-types';

function DateTime(props) {
  const { date } = props;
  
  return (
    <p className="date">{date}</p>
  )
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateTime;