import { useState } from 'react';
import Title from './components/Title';
import AccountTable from './components/account/AccountTable';
import IncomeEntry from './components/account/IncomeEntry';
import ExpenseEntry from './components/account/ExpenseEntry';
import CreateEntry from './components/CreateEntry';
import './App.css';

const defaultEntries = [
  { title: "รับรายวัน", amount: +100 },
  { title: "ค่าอาหาร", amount: -35 },
  { title: "ยืมเงินเพื่อน", amount: +40 },
  { title: "ค่าเดินทาง", amount: -80 },
  { title: "รับรายวัน", amount: +100 },
  { title: "ค่าอาหาร", amount: -30 },
  { title: "คืนเงินเพื่อน", amount: -40 },
  { title: "ค่าขนม", amount: -25 },
];

function App() {
  const [entries, setEntries] = useState(defaultEntries);
  const handleCreateEntry = (entry) => {
    setEntries([...entries, entry]);
  };
  return (
    <div className="App">
      <Title />
      <div className="row">
        <AccountTable>
          {
            entries.map(({ title, amount }) => {
              const EntryComponent = amount > 0 ? IncomeEntry : ExpenseEntry;
              return <EntryComponent title={title} amount={Math.abs(amount)} />
            })
          }
        </AccountTable>
        <CreateEntry handleCreateEntry={handleCreateEntry} />
      </div>
    </div>
  );
}

export default App;
