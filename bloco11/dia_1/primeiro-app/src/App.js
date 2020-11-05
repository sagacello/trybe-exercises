import './App.css';
//import Task from './componentes'

let compromissos = ['estudar1', 'estudar2', 'estudar3', 'estudar4']

const task = (...compromissos) => {
  return (
    compromissos.map((busca, index) => {
      return <li className='App' key={index}>{busca}</li>
    }
    
    )
  );
}

function App() {
  return task(...compromissos)
}

export default App;
