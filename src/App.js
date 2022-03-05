import './App.css';
import Heading from './Heading';
import MetalMeta from './MetalMeta'
import BandList from './BandList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MetalMeta />
        <BandList />
      </header>
    </div>
  );
}

export default App;
