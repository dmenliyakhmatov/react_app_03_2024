import avatar from 'assets/images/avatar.jpg';
import coverImg from 'assets/images/cover.webp';
import { useState } from 'react';
import { Article } from '../../../shared/types/article';
import { StatsButtons } from './StatsButtons';
import s from './post.module.css';

// const postData = {
//   section: 'Technology',
//   authorName: 'John Doe',
//   authorAvatar: 'path-to-avatar.jpg',
//   publicationDate: 'January 15, 2023',
//   title: 'Lorem Ipsum Dolor Sit Amet',
//   coverImage: 'path-to-cover-image.jpg',
//   views: 1234,
//   likes: 56,
//   comments: 23,
//   bookmarks: 10,
// };

// const a: Record<string, string | number> = {
//   age: 29,
//   name: 'Dmitrii',
// };

// const obj1 = {
//   name: 'sads'
// }

// const obj2 = {
//   link: obj1
// }

type PostCardProps = {
  postData: Article;
  // one: string;
  // two: string;
};

// export const PostCard = (props: PostCardProps) => {
export const PostCard = (props: PostCardProps) => {
  // const postData = props.postData;
  // const one = props.one
  // const two = props.two
  // const { one, postData, two } = props;

  const [titleVisibilty, setTitleVisiblity] = useState(true);

  const { postData } = props;

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

      {titleVisibilty && <h2>{postData.title}</h2>}

      <button
        onClick={() => {
          setTitleVisiblity(!titleVisibilty);
        }}
      >
        {titleVisibilty ? 'Hide title' : 'Show title'}
      </button>
      <div className={s.coverImage}>
        <img src={coverImg} alt="cover" />
      </div>

      <StatsButtons likes={postData.likes} />
    </div>
  );
};

// const div = () => {};

// let a = 'string'

// const func = (options: {name: string, }) => {

// const newOptions = {...options}

// a = 'another string '
// options.name = 'some name'

// };
