import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import Video from './Video';

function VideoList(props) {
  const { list } = props;
  
  return (
    <div className="video-list"> 
      {list.map(({ url, date }) => <Video url={url} date={date} key={nanoid()} />)}
    </div>    
  )
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VideoList;