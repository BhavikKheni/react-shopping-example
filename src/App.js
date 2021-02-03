
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import {DataProvider} from './components/Context'
import Section from './components/Section'
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
      <Router>
            <Header />
            <Section />
          </Router>
      </div>
    </DataProvider>
  );
}

export default App;
