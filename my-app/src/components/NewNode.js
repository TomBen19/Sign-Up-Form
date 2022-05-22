import { useState } from "react";
import SaveNode from "./SaveNode";

const NewNode = (props) => {
    

        
    
        const [Node, setNode] = useState('');

        const handleChange = (event) => {
            setNode(event.target.value);

        }

        const handleSaveClick = (event) => {
            event.preventDefault();

            console.log('das');
            props.onAddNode(Node);
            setNode('')
        }
       

    
    return (
        <div className="container">
        <form onSubmit={handleSaveClick}>
            <label htmlFor='text'>Neue Notiz </label>
            <input type='text' name='text'className="test" onChange={handleChange} value={Node}></input>
            <button type= 'submit' >Add</button>
        </form>
        <div className="show">{Node}</div>
        </div>
    )

}

export default NewNode;