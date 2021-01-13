import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import Video from './Video';
import Article from './Article';

function List(props) {
  const { list } = props;  
 
  const content = list.map(item => {
    switch (item.type) {
      case 'video':
        return <Video {...item} key={nanoid()} />;

      case 'article':
        return <Article {...item} key={nanoid()} />;

      default:
        return null;
    }
  });

  return (
    <div className="item-list"> 
      {content}
    </div>   
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;