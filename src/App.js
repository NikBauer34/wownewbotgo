
import { useEffect } from 'react';
import './App.css';

function App() {
  const tg = window.Telegram.WebApp

  useEffect(()=> {
    tg.ready()
  })

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Жми</button>
    </div>
  );
}

export default App;
