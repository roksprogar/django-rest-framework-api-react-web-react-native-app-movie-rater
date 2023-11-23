import './App.css';
import Footer from './components/footer';
import Header from './components/header'

function createAlert(){
  alert('Hello! You clicked me!');
}

function App() {

  return (
    <div className="App">
      <Header info="This is our header!" />
      <Header info="This is another header!" />
      <p>main content</p>
      <Footer createAlert={createAlert} trademark="page by Rok"/>
    </div>
  );
}

export default App;
