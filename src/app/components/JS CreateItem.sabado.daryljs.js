import { useState } from 'react';


const CreateItem = ({ onCreate }) => {
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');


 const handleCreate = () => {
   // Perform API call to create item
   onCreate({ name, description });


   // Clear form after creation
   setName('');
   setDescription('');
 };


 return (
   <div>
     <h2>Create Item</h2>
     <input
       type="text"
       placeholder="Name"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
     <textarea
       placeholder="Description"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
     />
     <button onClick={handleCreate}>Create Item</button>
   </div>
 );
};


export default CreateItem;
