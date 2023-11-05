import { useEffect, useState } from 'react';
import List from '../List';
import Search from '../Search';
import './App.css';

const data = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);
  useEffect(() => {
    setItems(
      data.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);
  return (
    <div className="App">
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={items} />
    </div>
  );
}

export default App;
