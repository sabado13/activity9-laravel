"use client"


import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateItem from './components/JS CreateItem';
import ReadItems from './components/JS ReadItem';
import UpdateItem from './components/JS UpdateItem';
import DeleteItem from './components/JS DeleteItem';


const Home = () => {
 const [items, setItems] = useState([]);
 const [selectedItem, setSelectedItem] = useState(null);


 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('http://localhost:8000/api/items');
       setItems(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };


   fetchData();
 }, []);


 const handleCreate = async (newItem) => {
   try {
     const response = await axios.post('http://localhost:8000/api/items', newItem);
     setItems([...items, response.data]);
   } catch (error) {
     console.error('Error creating item:', error);
   }
 };


 const handleUpdate = (item) => {
   setSelectedItem(item);
 };


 const handleUpdateItem = async (id, updatedItem) => {
   try {
     const response = await axios.put(`http://localhost:8000/api/items/${id}`, updatedItem);
     setItems(items.map((item) => (item.id === id ? response.data : item)));
     setSelectedItem(null);
   } catch (error) {
     console.error('Error updating item:', error);
   }
 };


 const handleDeleteItem = async (id) => {
   try {
     await axios.delete(`http://localhost:8000/api/items/${id}`);
     setItems(items.filter((item) => item.id !== id));
   } catch (error) {
     console.error('Error deleting item:', error);
   }
 };


 return (
   <div>
     <CreateItem onCreate={handleCreate} />
     <ReadItems items={items} onUpdate={handleUpdate} onDelete={handleDeleteItem} />
     {selectedItem && (
       <UpdateItem item={selectedItem} onUpdate={handleUpdateItem} onCancel={() => setSelectedItem(null)} />
     )}
   </div>
 );
};


export default Home;
