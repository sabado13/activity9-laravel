const DeleteItem = ({ item, onDelete }) => {
    const handleDelete = () => {
      // Perform API call to delete item
      onDelete(item.id);
    };
     return (
      <div>
        <h2>Delete Item</h2>
        <p>{item.name} - {item.description}</p>
        <button onClick={handleDelete}>Delete Item</button>
      </div>
    );
  };
   export default DeleteItem;
 