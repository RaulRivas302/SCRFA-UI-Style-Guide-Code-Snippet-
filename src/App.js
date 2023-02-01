import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Middle from './components/Middle/Middle';
import Update from './components/Update/Update';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Middle />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
