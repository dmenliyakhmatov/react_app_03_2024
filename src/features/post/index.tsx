import { StatsButtons } from './StatsButtons';
import avatar from './avatar.jpg';
import coverImg from './cover.webp';
import s from './post.module.css';

const postData = {
  section: 'Technology',
  authorName: 'John Doe',
  authorAvatar: 'path-to-avatar.jpg',
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: 'path-to-cover-image.jpg',
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

export const PostCard = () => {
  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{postData.section}</span>
          <div className={s.authorInfo}>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <span>{postData.authorName}</span>
          </div>
          <span>{postData.publicationDate}</span>
        </div>
        <div className={s.headerRight}>
          <button className={s.moreOptionsButton}>Подписаться</button>
        </div>
      </div>

      <h2>{postData.title}</h2>

      <div className={s.coverImage}>
        <img src={coverImg} alt="cover" />
      </div>

      <StatsButtons />
    </div>
  );
};
