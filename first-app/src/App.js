import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';

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

const pStyle = {
  fontSize: '2em',
  color: 'red'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`

function App() {
  return (
    <div className="App">
      <Header info="This is our header!" />
      <Header info="This is another header!" />
      <p style={pStyle}>main content</p>
      <Paragraph>New styled</Paragraph>
      <Footer createAlert={createAlert} trademark="page by Rok"/>
      <ShowMessage toShow={false} />
    </div>
  );
}

export default App;
