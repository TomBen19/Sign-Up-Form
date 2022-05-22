const SaveNode = (props) => {
    return (
       <ul>
           {props.nodes.map((node) => (
               
               <li key={node.id}>
                   {node.text}
               </li>
           ))}
       </ul>
    );



}

export default SaveNode