import { useState } from 'react';

export const KeyPropPage = () => {
  return (
    <div>
      <h1>Key</h1>
      <Example />
    </div>
  );
};

type Todo = {
  name: string;
  id: number;
};

type ItemProps = {
  name: string;
};

const Item = ({ name }: ItemProps) => {
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label">{name}</label>
      <div className="col-xs-8">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

const Example = () => {
  const [list, setList] = useState<Todo[]>([
    { name: 'Foo1444610101010', id: 1444610101010 },
    { name: 'Bar1444600000000', id: 1444600000000 },
  ]);

  const addItem = () => {
    const id = +new Date();
    setList([{ name: 'Baz' + id, id }, ...list]);
  };

  return (
    <div style={{ marginLeft: 40 }}>
      <hr />
      <button className="btn btn-primary" onClick={addItem}>
        <b>Add item</b> to the beginning of the list
      </button>

      <div style={{ display: 'flex', gap: 80 }}>
        <div>
          <h3>
            Dangerous <code>key=index</code>
          </h3>
          <form className="form-horizontal">
            {list.map((todo, index) => (
              <Item {...todo} key={index} />
            ))}
          </form>
        </div>
        <div>
          <h3>
            Better <code>key=id</code>
          </h3>
          <form className="form-horizontal">
            {list.map(todo => (
              <Item {...todo} key={todo.id} />
            ))}
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};
