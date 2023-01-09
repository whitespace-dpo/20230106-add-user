import AddUser from "./Users/AddUser";
import "./App.css";
import UsersList from "./Users/UsersList";
import { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (newName, newAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {name: newName, age: newAge, id: Math.random().toString()},
      ]
    })
  }
  const deleteUserHandler = userId => {
    setUsersList(prevUser => {
      const updatedUsers = prevUser.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };
  return (
    <div>
      <h2>WhiteSpace</h2>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList user={usersList} onDelete={deleteUserHandler}/>
    </div>
  );
}

export default App;
