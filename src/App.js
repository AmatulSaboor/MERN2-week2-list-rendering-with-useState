import './App.css';
import List from './components/list/List';
import {useState} from 'react';
function App() {
  let list = [
    {
      id: 1,
      name: 'Kamal',
      group: 'red',
      year : 2024
    },
    {
      id: 2,
      name: 'Laiba',
      group: 'yellow',
      year : 2022
    },
    {
      id: 3,
      name: 'Sohail',
      group: 'yellow',
      year : 2021
    },
    {
      id: 4,
      name: 'Paris',
      group: 'green',
      year : 2021
    },
    {
      id: 5,
      name: 'Hussain',
      group: 'red',
      year : 2022
    }
  ];
  let [studentList, setStudentList] = useState(list);
  return (
    <div className="App">
      <header className="App-header">
        <List studentList={studentList} setStudentList={setStudentList}/>
      </header>
    </div>
  );
}

export default App;
