import './App.css';
import Footer from './components/footer';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header info="This is our header!" myNumber="6" />
      <Header info="This is another header!" />
      <p>main content</p>
      <Footer trademark="page by Rok"/>
    </div>
  );
}

export default App;
