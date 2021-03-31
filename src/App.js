import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import Editor from './Components/SunEditor';


function App() {
  return (
    <div className="App">
      <Dropdown as={ButtonGroup}>
  <Button variant="success">TV</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Intern</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Extern</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      <Editor />
    </div>
  );
}

export default App;
