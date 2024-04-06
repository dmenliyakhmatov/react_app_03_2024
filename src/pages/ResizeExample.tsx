import { useEffect, useState } from 'react';

export const ResizeExamplePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      console.log('call');
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <div>
      <h2>Resize example</h2>

      <h3>width {windowWidth}</h3>
    </div>
  );
};
//==================================

//==================================
//==================================
//==================================
// const user1 = {
//   id: 1,
//   name: 'Dmitrii',
//   age: 29,
//   friends: [
//     { id: 2, name: 'Maksim', age: 23 },
//     { id: 3, name: 'Aleksei', age: 23 },
//   ],
// };

// const user2 = user1;

// // user2.age = 30;

// const updateName = (user: typeof user1, age: number) => {
//   const newUser = { ...user, age };

//   //   newUser.age = age

//   return newUser;
// };

// const addFriend = (user: typeof user1, name: string) => {
//   const newUser = { ...user, friends: [...user.friends, { name, age: 34, id: 4 }] };

//   return newUser;
// };

// const user3 = updateName(user1, 30);

// const user4 = addFriend(user1, 'Kirill');

// console.log('user1', user1);
// console.log('user2', user2, user1 === user2);

// console.log('user3', user3, user1.friends === user3.friends);
// console.log('user4', user4);

// const state = {
//   component1: {
//     couter: 1,
//   },
//   component2: {
//     articleList: [{ id: 1 }, { id: 2 }],
//   },
// };

// const prevState = {
//   component1: {
//     couter: 1,
//     articleList: [{ id: 1 }, { id: 2 }],
//   },
//   component2: {
//     articleList: [{ id: 1 }, { id: 2 }],
//   },
// };

// const newState = { ...state, component1: { ...state.component1, counter: 3 } };

// prevState.component1 === newState.component1;
