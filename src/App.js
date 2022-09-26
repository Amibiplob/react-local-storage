import './App.css';
import FakeDb from './FakeDb/FakeDb';
import History from './History/History';

function App() {
  return (
    <div>
      <div className="App">
        <h2>Here Some Data</h2>
        <h2>
          Total Item Added : 0
        </h2>
      </div>
      <hr />
      <FakeDb></FakeDb>
      <History></History>
    </div>
  );
}

export default App;
