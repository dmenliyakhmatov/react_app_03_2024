import { ChangeEvent, MouseEventHandler, ReactNode, useState } from 'react';
import { mockPosts } from '../features/Articles/model/mockArticles';
import { PostCard } from '../features/Articles/ui';

// const postData1 = {
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
// const postData2 = {
//   section: 'Travel',
//   authorName: 'Adam Doe',
//   authorAvatar: 'path-to-avatar.jpg',
//   publicationDate: 'January 15, 2023',
//   title: 'Lorem Ipsum Dolor Sit Amet',
//   coverImage: 'path-to-cover-image.jpg',
//   views: 34,
//   likes: 5,
//   comments: 1,
//   bookmarks: 10,
// };

// const postData3 = {
//   section: 'Games',
//   authorName: 'Simon Doe',
//   authorAvatar: 'path-to-avatar.jpg',
//   publicationDate: 'January 15, 2023',
//   title: 'Lorem Ipsum Dolor Sit Amet',
//   coverImage: 'path-to-cover-image.jpg',
//   views: 1234,
//   likes: 56,
//   comments: 23,
//   bookmarks: 10,
// };

const ParentComponet = ({ children }: { children: ReactNode }) => {
  return <div style={{ backgroundColor: 'red', padding: '24px' }}>{children}</div>;
};

// const ChildrenComponent = ({ message }: { message: string }) => {
//   return <h3>{message}</h3>;
// };

// const arr = [0, 2, 4];

// const firstEl = arr[0];
// const secondEl = arr[1];
// const thirdEl = arr[2];
// const [firstEl, secondEl, thirdEl] = arr;

export const ArticlePage = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInptValue] = useState('');
  //   let coun1 = 1;
  //   console.log('render');

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    setCount(count + 1);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInptValue(e.target.value);
  };

  return (
    <div>
      <p> count: {count}</p>
      <button onClick={onButtonClick}>Increment</button>

      <p>{inputValue}</p>
      <input type="text" onChange={inputChangeHandler} value={inputValue} />

      <button
        onClick={() => {
          setInptValue('');
        }}
      >
        Clear input
      </button>

      <h2>Популярные статьи</h2>
      {/* <ParentComponet> */}
      {/* <ChildrenComponent message="Hello" /> */}
      {/* </ParentComponet> */}

      {mockPosts.map((article, index) => (
        <PostCard postData={article} key={index} />
        // PostCard({postData: article})
      ))}

      {/* <PostCard postData={postData1} />
      <PostCard postData={postData2} />
      <PostCard postData={postData3} /> */}
    </div>
  );
};
