import { memo, useCallback, useState } from 'react';

export const MemoExamplePage = () => {
  return (
    <div>
      <h1>Memo page</h1>
      <Table />
    </div>
  );
};

interface RowData {
  id: number;
  name: string;
  age: number;
}

function Table() {
  // Массив данных для отображения в таблице
  const [tabelData, setTableData] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
    { id: 4, name: 'Alice', age: 28 },
    { id: 5, name: 'Bob', age: 35 },
    { id: 6, name: 'Charlie', age: 45 },
    { id: 7, name: 'David', age: 33 },
    { id: 8, name: 'Eva', age: 29 },
    { id: 9, name: 'Frank', age: 50 },
    { id: 10, name: 'Grace', age: 27 },
    { id: 11, name: 'Harry', age: 36 },
    { id: 12, name: 'Ivy', age: 41 },
    { id: 13, name: 'Jack', age: 32 },
    { id: 14, name: 'Kate', age: 39 },
    { id: 15, name: 'Liam', age: 26 },
    { id: 16, name: 'Mia', age: 43 },
    { id: 17, name: 'Noah', age: 31 },
    { id: 18, name: 'Olivia', age: 38 },
    { id: 19, name: 'Peter', age: 47 },
    { id: 20, name: 'Quinn', age: 34 },
    { id: 21, name: 'Rachel', age: 49 },
    { id: 22, name: 'Sam', age: 37 },
    { id: 23, name: 'Tina', age: 29 },
    { id: 24, name: 'Ursula', age: 48 },
    { id: 25, name: 'Victor', age: 42 },
    { id: 26, name: 'Wendy', age: 30 },
    { id: 27, name: 'Xavier', age: 44 },
    { id: 28, name: 'Yvonne', age: 39 },
    { id: 29, name: 'Zack', age: 28 },
    { id: 30, name: 'Abigail', age: 46 },
    { id: 31, name: 'Ben', age: 33 },
    { id: 32, name: 'Catherine', age: 25 },
    { id: 33, name: 'Daniel', age: 41 },
    { id: 34, name: 'Emily', age: 36 },
    { id: 35, name: 'Fiona', age: 27 },
    { id: 36, name: 'George', age: 45 },
    { id: 37, name: 'Hannah', age: 32 },
    { id: 38, name: 'Ian', age: 38 },
    { id: 39, name: 'Jessica', age: 29 },
    { id: 40, name: 'Kevin', age: 50 },
    { id: 41, name: 'Lily', age: 35 },
    { id: 42, name: 'Michael', age: 46 },
    { id: 43, name: 'Natalie', age: 31 },
    { id: 44, name: 'Oscar', age: 48 },
    { id: 45, name: 'Penelope', age: 34 },
    { id: 46, name: 'Quentin', age: 47 },
    { id: 47, name: 'Rebecca', age: 30 },
    { id: 48, name: 'Simon', age: 43 },
    { id: 49, name: 'Tiffany', age: 33 },
    { id: 50, name: 'Ulysses', age: 49 },
  ]);

  // Состояние для хранения выбранных строк таблицы
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  // Функция для выбора строки
  const handleRowClick = useCallback((id: number) => {
    setSelectedRows(prev => {
      const selectedIndex = prev.indexOf(id);
      if (selectedIndex === -1) {
        return [...prev, id];
      } else {
        const updatedRows = [...prev];
        updatedRows.splice(selectedIndex, 1);
        return updatedRows;
      }
    });

    // const selectedIndex = selectedRows.indexOf(id);
    // if (selectedIndex === -1) {
    //   setSelectedRows([...selectedRows, id]);
    // } else {
    //   const updatedRows = [...selectedRows];
    //   updatedRows.splice(selectedIndex, 1);
    //   setSelectedRows(updatedRows);
    // }
  }, []);

  console.log('render table');

  return (
    <>
      <input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
      <button
        onClick={() => {
          setTableData(prev => [...prev, { id: prev.length + 1, name: inputValue, age: 30 }]);
        }}
      >
        Add user
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tabelData.map(row => (
            <OptimizedRow
              key={row.id}
              handleRowClick={handleRowClick}
              {...row}
              selected={selectedRows.includes(row.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

type RowProps = {
  selected: boolean;
  handleRowClick: (id: number) => void;
} & RowData;

const tooLongTask = (arg: boolean) => {
  console.log('task calculation');

  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return 'done';
};

const Row = (props: RowProps) => {
  //   const a = useMemo(() => tooLongTask(props.selected), [props.selected]);

  tooLongTask(props.selected);

  console.log('row render');
  return (
    <tr
      onClick={() => props.handleRowClick(props.id)}
      style={{ backgroundColor: props.selected ? 'lightblue' : 'white' }}
    >
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
};

const OptimizedRow = memo(Row);
