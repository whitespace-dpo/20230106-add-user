import User from "./User";
import styles from "./UserList.module.css";
const UsersList = (props) => {
  return (
    <div className={`${styles["user-list"]}`}>
      {props.user.map((user) => (
        <User
          name={user.name}
          age={user.age}
          id={user.id}
          onDelete={props.onDelete}
        ></User>
      ))}
    </div>
  );
};
export default UsersList;
