import logo from './logo.svg';
import NewNode from './components/NewNode';
import SaveNode from './components/SaveNode';
import {useState} from 'react';




function App() {
  const [nodeList, setNodeList] = useState([]);
  const addNodeHandler = (uText) => {
    console.log('re');
    setNodeList((prevNodeList) => {
      return [...prevNodeList, {text: uText, id: Math.random().toString()}];
    });
  };
    


  
  return (
    <div>
    <NewNode onAddNode={addNodeHandler} />
    <SaveNode nodes = {nodeList}/>
    </div>
  );
};

export default App;
