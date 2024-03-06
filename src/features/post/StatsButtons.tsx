import s from './post.module.css';

export const StatsButtons = () => (
  <div className={s.stats}>
    <button className={s.moreOptionsButton}> Viwes: 234</button>
    <button className={s.moreOptionsButton}> Likes: 234123</button>
    <button className={s.moreOptionsButton}> Comments: 234</button>
    <button className={s.moreOptionsButton}> Bookmarks: 23432</button>
  </div>
);
