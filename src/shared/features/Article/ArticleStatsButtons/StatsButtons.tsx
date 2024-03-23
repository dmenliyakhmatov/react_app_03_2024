import LikeIcon from 'assets/icons/heart.svg';
import { useState } from 'react';
import { IconButton } from '../../../components/IconButton';
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
      <IconButton> Viwes: 234</IconButton>
      <IconButton icon={<LikeIcon color="red" />} onClick={onLikeClick}>
        {likes}
      </IconButton>
      <IconButton> Comments: 234</IconButton>
      <IconButton> Bookmarks: 23432</IconButton>
    </div>
  );
};
