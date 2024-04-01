import s from './loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loader;
