import './App.css';
import { DropDown } from './components/DropDown/DropDown';

function App() {
  return (
    <div className="App">
      <DropDown onChange={(value) => console.log(value)}>
        <DropDown.Item value="kemo">kemo</DropDown.Item>
        <DropDown.Item value="jeo">jeo</DropDown.Item>
        <DropDown.Item value="rafa">rafa</DropDown.Item>
        <DropDown.Item value="rafa">rafa</DropDown.Item>
      </DropDown>
    </div>
  );
}

export default App;
