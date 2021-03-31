import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, SplitButton } from 'react-bootstrap';
import Editor from './Components/SunEditor';


function App() {
  return (
    <div className="App">
      <SplitButton
        key={1}
        id={`dropdown-split`}
        variant='Success'
        title='test'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
      <Editor />
    </div>
  );
}

export default App;
