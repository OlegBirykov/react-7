import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import Video from './Video';
import Article from './Article';
import withSpecial from './withSpecial';

function List(props) {
  const { list } = props;  

  const VideoSpecial = withSpecial(Video);
  const ArticleSpecial = withSpecial(Article);
 
  const content = list.map(item => {
    switch (item.type) {
      case 'video':
        return <VideoSpecial {...item} key={nanoid()} />;

      case 'article':
        return <ArticleSpecial {...item} key={nanoid()} />;

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