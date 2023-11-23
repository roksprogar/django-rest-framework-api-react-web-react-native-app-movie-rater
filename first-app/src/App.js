import './App.css';
import Footer from './components/footer';
import Header from './components/header';

function createAlert(){
  alert('Hello! You clicked me!');
}

function ShowMessage(props){
  if(props.toShow) {
    return <h2>My message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
}

function App() {
  return (
    <div className="App">
      <Header info="This is our header!" />
      <Header info="This is another header!" />
      <p>main content</p>
      <Footer createAlert={createAlert} trademark="page by Rok"/>
      <ShowMessage toShow={false} />
    </div>
  );
}

export default App;
