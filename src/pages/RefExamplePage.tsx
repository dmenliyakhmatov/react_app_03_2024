import { useEffect, useRef, useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { useToggle } from '../hooks/useToggle';
import { mockPosts } from '../shared/mocks/mockArticles';

export const RefExamplePage = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const listRef = useRef<HTMLDivElement>(null!);
  const renderCounterRef = useRef(0);

  const [articles, setArticles] = useState(mockPosts);
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [showToTopButton, , showButton, hideButton] = useToggle(false);

  renderCounterRef.current++;

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, []);

  useEffect(() => {
    const listElement = listRef.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = listElement;
      if (scrollTop + clientHeight >= scrollHeight * 0.4) {
        showButton();
      } else {
        hideButton();
      }
    };

    listElement.addEventListener('scroll', handleScroll);

    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, [showButton, hideButton]);

  return (
    // <PageWrapper>
    <div>
      <h2>Ref</h2>
      <input id="input" ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Focus input
      </button>

      <button
        onClick={() => {
          setName(inputRef.current.value);
        }}
      >
        Show name
      </button>

      <h3>{name}</h3>

      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(renderCounterRef.current);
        }}
      >
        Show counter
      </button>

      <div ref={listRef} style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'scroll' }}>
        <ArticleList articles={articles} />
      </div>

      {showToTopButton && (
        <button
          style={{ zIndex: 100, position: 'fixed', left: '50px', bottom: '60px' }}
          onClick={() => {
            listRef.current.scrollTo(0, 0);
            //   setShowToTopButton(false);
          }}
        >
          To top
        </button>
      )}
    </div>
    // </PageWrapper>
  );
};
