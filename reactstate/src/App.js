import './App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';


function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <div className="my-body__wrapper container p-5">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
