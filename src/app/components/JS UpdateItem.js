import { useState } from 'react';


const UpdateItem = ({ item, onUpdate }) => {
 const [name, setName] = useState(item.name);
 const [description, setDescription] = useState(item.description);


 const handleUpdate = () => {
   // Perform API call to update item
   onUpdate(item.id, { name, description });
 };


 return (
   <div>
     <h2>Edit Item</h2>
     <input
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
     <textarea
       value={description}
       onChange={(e) => setDescription(e.target.value)}
     />
     <button onClick={handleUpdate}>Update Item</button>
   </div>
 );
};


export default UpdateItem;
