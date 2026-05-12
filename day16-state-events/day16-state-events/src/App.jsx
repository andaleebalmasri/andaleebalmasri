import './App.css';


/*
day 16 : state & events
Goals: practice useState + events + controlled input + mini interactive app(task manager)
*/
import Counter from '/components/Counter';
import LikeButton from './components/LikeButton';
import TaskManager from './components/task-manager';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='page'>
      <header className='topbar'>
        <p>  useState + events + controlled input + mini interactive app(task manager)
        </p>
        <h1>Day 16 : state & events</h1>
      </header>
      <section className='section'>
        <h2>understanding state </h2>
        <p className='muted'>
          state belong to a component.When state change, react re-render UI.
        </p>
        <div className='grid'>
          <Counter />
          <LikeButton />
        </div>
      </section>
<footer className='footer'>
  <p className='muted'>best practice: never state directly . Always use setState.</p>
  </footer>
    </div>);
}
export default App;