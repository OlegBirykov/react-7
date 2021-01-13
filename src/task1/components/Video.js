import PropTypes from 'prop-types';
import DateTime from './DateTime';
import withPretty from './withPretty';

function Video(props) {
  const { url, date } = props;
  const DateTimePretty = withPretty(DateTime);
  
  return (
    <div className="video">
      <iframe src={url} title={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Video;