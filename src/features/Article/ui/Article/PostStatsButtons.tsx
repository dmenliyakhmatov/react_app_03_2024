import { useState } from 'react';
import { Article } from 'shared/types/article';
import styles from './postStatsButtons.module.css';

type PostStatsButtonsProps = Pick<Article, 'views' | 'likes' | 'comments' | 'bookmarks'>;

export const PostStatsButtons = (props: PostStatsButtonsProps) => {
  const [likes, setLikes] = useState(0);

  const onLikeClick = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className={styles.stats}>
      {/* <IconButton icon="Views">{props.views}</IconButton>
      <IconButton icon={<HeartIcon color="blue" height={20} width={20} />} onClick={onLikeClick}>
        {likes}
      </IconButton>
      <IconButton icon="Comments">{props.comments}</IconButton>
      <IconButton icon="Bookmarks">{props.bookmarks}</IconButton> */}
    </div>
  );
};
