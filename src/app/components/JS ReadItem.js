import React from 'react';


const ReadItems = ({ items, onUpdate, onDelete }) => {
 return (
   <div>
     <h2>All Items</h2>
     <ul>
       {items.map((item) => (
         <li key={item.id}>
           {item.name} - {item.description}
           <button onClick={() => onUpdate(item)}>Edit</button>
           <button onClick={() => onDelete(item.id)}>Delete</button>
         </li>
       ))}
     </ul>
   </div>
 );
};


export default ReadItems;
