import { useState } from 'react';
import s from './post.module.css';

type StatsButtonProps = {
  likes: number;
};

export const StatsButtons = (props: StatsButtonProps) => {
  const [likes, setLikes] = useState(props.likes);

  const onLikeClick = () => {
    setLikes(likes + 1);

    // likes = likes + 1;
  };

  return (
    <div className={s.stats}>
      <button className={s.moreOptionsButton}> Viwes: 234</button>
      <button className={s.moreOptionsButton} onClick={onLikeClick}>
        Likes: {likes}
      </button>
      <button className={s.moreOptionsButton}> Comments: 234</button>
      <button className={s.moreOptionsButton}> Bookmarks: 23432</button>
    </div>
  );
};
