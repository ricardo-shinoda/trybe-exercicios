import About from './About';
import './App.css';

const Task = (value) => {
  return(
    <li>{value}</li>
  )
}

const tarefas = ["acordar", "escovar os dentes", "acordar o fofo", "arrumar o fofo", "trocar o fofo", "levar o fofo para a escola"];

function App() {
  return (
    <div>
      <About />
    <ul> { tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
